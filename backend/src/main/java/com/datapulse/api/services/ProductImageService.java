package com.datapulse.api.services;

import com.datapulse.api.dto.ProductImageDto;
import com.datapulse.api.entities.Product;
import com.datapulse.api.entities.ProductImage;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.User;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.ProductImageRepository;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductImageService {

    private final ProductImageRepository imageRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final StoreRepository storeRepository;

    @Value("${app.upload.dir:uploads}")
    private String uploadDir;

    @Value("${app.base-url:http://localhost:8080}")
    private String baseUrl;

    // ─── READ ────────────────────────────────────────────────────

    @Transactional(readOnly = true)
    public List<ProductImageDto> getImages(Long productId) {
        ensureProductExists(productId);
        return imageRepository.findByProductIdOrderByDisplayOrderAsc(productId)
                .stream().map(this::mapToDto).collect(Collectors.toList());
    }

    // ─── UPLOAD ──────────────────────────────────────────────────

    @Transactional
    public ProductImageDto uploadImage(Long productId,
                                       MultipartFile file,
                                       String altText,
                                       boolean makePrimary,
                                       String uploaderEmail) throws IOException {
        Product product = ensureProductExists(productId);
        checkOwnership(product, uploaderEmail);

        // Dosyayı kaydet
        String filename = saveFile(file);
        String url = baseUrl + "/uploads/" + filename;

        // Sıra numarası: mevcut max + 1
        int nextOrder = imageRepository.findMaxDisplayOrder(productId) + 1;

        // İlk görselse otomatik primary
        boolean isPrimary = makePrimary || nextOrder == 0;

        if (isPrimary) {
            imageRepository.clearPrimaryForProduct(productId);
        }

        ProductImage image = ProductImage.builder()
                .product(product)
                .imageUrl(url)
                .altText(altText != null ? altText : product.getName())
                .displayOrder(nextOrder)
                .isPrimary(isPrimary)
                .build();

        ProductImage saved = imageRepository.save(image);

        // Product.imageUrl'yi senkronize et
        if (isPrimary) {
            product.setImageUrl(url);
            productRepository.save(product);
        }

        return mapToDto(saved);
    }

    // ─── SET PRIMARY ─────────────────────────────────────────────

    @Transactional
    public ProductImageDto setPrimary(Long imageId, String uploaderEmail) {
        ProductImage image = imageRepository.findById(imageId)
                .orElseThrow(() -> new ResourceNotFoundException("Image not found: " + imageId));

        checkOwnership(image.getProduct(), uploaderEmail);

        imageRepository.clearPrimaryForProduct(image.getProduct().getId());
        image.setIsPrimary(true);
        ProductImage saved = imageRepository.save(image);

        // Product.imageUrl güncelle
        Product product = image.getProduct();
        product.setImageUrl(image.getImageUrl());
        productRepository.save(product);

        return mapToDto(saved);
    }

    // ─── DELETE ──────────────────────────────────────────────────

    @Transactional
    public void deleteImage(Long imageId, String uploaderEmail) throws IOException {
        ProductImage image = imageRepository.findById(imageId)
                .orElseThrow(() -> new ResourceNotFoundException("Image not found: " + imageId));

        checkOwnership(image.getProduct(), uploaderEmail);

        boolean wasPrimary = image.getIsPrimary();
        Long productId = image.getProduct().getId();

        // Dosyayı sil
        deleteFile(image.getImageUrl());
        imageRepository.delete(image);

        // Eğer primary silindiyse, sıradaki görseli primary yap
        if (wasPrimary) {
            List<ProductImage> remaining = imageRepository.findByProductIdOrderByDisplayOrderAsc(productId);
            if (!remaining.isEmpty()) {
                ProductImage next = remaining.get(0);
                next.setIsPrimary(true);
                imageRepository.save(next);
                image.getProduct().setImageUrl(next.getImageUrl());
            } else {
                image.getProduct().setImageUrl(null);
            }
            productRepository.save(image.getProduct());
        }
    }

    // ─── REORDER ─────────────────────────────────────────────────

    @Transactional
    public List<ProductImageDto> reorder(Long productId, List<Long> orderedIds, String uploaderEmail) {
        Product product = ensureProductExists(productId);
        checkOwnership(product, uploaderEmail);

        List<ProductImage> images = imageRepository.findByProductIdOrderByDisplayOrderAsc(productId);

        for (int i = 0; i < orderedIds.size(); i++) {
            final int order = i;
            final Long id = orderedIds.get(i);
            images.stream()
                  .filter(img -> img.getId().equals(id))
                  .findFirst()
                  .ifPresent(img -> img.setDisplayOrder(order));
        }
        imageRepository.saveAll(images);
        return images.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    // ─── HELPERS ─────────────────────────────────────────────────

    public List<ProductImageDto> mapImages(List<ProductImage> images) {
        return images.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    private ProductImageDto mapToDto(ProductImage img) {
        return ProductImageDto.builder()
                .id(img.getId())
                .productId(img.getProduct().getId())
                .imageUrl(img.getImageUrl())
                .altText(img.getAltText())
                .displayOrder(img.getDisplayOrder())
                .isPrimary(img.getIsPrimary())
                .build();
    }

    private Product ensureProductExists(Long productId) {
        return productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found: " + productId));
    }

    private void checkOwnership(Product product, String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // ADMIN her şeye erişebilir
        boolean isAdmin = user.getAuthorities().stream()
                .anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));
        if (isAdmin) return;

        // CORPORATE kendi mağazasının ürününe erişebilir
        if (product.getStore() != null) {
            boolean ownsStore = storeRepository.findAll().stream()
                    .filter(s -> s.getOwner() != null && s.getOwner().getId().equals(user.getId()))
                    .anyMatch(s -> s.getId().equals(product.getStore().getId()));
            if (ownsStore) return;
        }

        throw new RuntimeException("Unauthorized: you do not own this product's store");
    }

    private String saveFile(MultipartFile file) throws IOException {
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) Files.createDirectories(uploadPath);

        String extension = "";
        String original = file.getOriginalFilename();
        if (original != null && original.contains(".")) {
            extension = original.substring(original.lastIndexOf('.'));
        }
        String filename = UUID.randomUUID() + extension;
        Path destination = uploadPath.resolve(filename);
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return filename;
    }

    private void deleteFile(String imageUrl) {
        try {
            // URL'den dosya adını çıkar: http://host/uploads/filename.jpg → filename.jpg
            String filename = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
            Path file = Paths.get(uploadDir, filename);
            Files.deleteIfExists(file);
        } catch (IOException ignored) {
            // Dosya zaten yoksa sessizce devam et
        }
    }
}
