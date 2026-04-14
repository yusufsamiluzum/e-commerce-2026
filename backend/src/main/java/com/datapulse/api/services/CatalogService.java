package com.datapulse.api.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.CorporateProductDto;
import com.datapulse.api.dto.ProductRequest;
import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.Product;
import com.datapulse.api.entities.Store;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.CategoryRepository;
import com.datapulse.api.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CatalogService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final StoreService storeService;
    private final ProductImageService productImageService;

    /**
     * Mağazanın tüm ürünlerini listele (aktif ve inaktif)
     */
    @Transactional(readOnly = true)
    public List<CorporateProductDto> getMyProducts(String ownerEmail) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        List<Product> products = productRepository.findByStoreIdOrderByCreatedAtDesc(store.getId());
        return products.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    /**
     * Tek bir ürünün detaylarını getir (ownership kontrolü dahil)
     */
    @Transactional(readOnly = true)
    public CorporateProductDto getProductDetail(String ownerEmail, Long productId) {
        Product product = findAndVerifyOwnership(ownerEmail, productId);
        return mapToDto(product);
    }

    /**
     * Yeni ürün oluştur
     */
    @Transactional
    public CorporateProductDto createProduct(String ownerEmail, ProductRequest request) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);

        Product product = Product.builder()
                .store(store)
                .sku(request.getSku())
                .name(request.getName())
                .description(request.getDescription())
                .unitPrice(request.getUnitPrice())
                .originalPrice(request.getOriginalPrice())
                .stockQuantity(request.getStockQuantity())
                .categoryId(request.getCategoryId())
                .isFeatured(request.getIsFeatured() != null ? request.getIsFeatured() : false)
                .isActive(true)
                .build();

        return mapToDto(productRepository.save(product));
    }

    /**
     * Mevcut ürünü güncelle
     */
    @Transactional
    public CorporateProductDto updateProduct(String ownerEmail, Long productId, ProductRequest request) {
        Product product = findAndVerifyOwnership(ownerEmail, productId);

        product.setSku(request.getSku());
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setUnitPrice(request.getUnitPrice());
        product.setOriginalPrice(request.getOriginalPrice());
        product.setStockQuantity(request.getStockQuantity());
        product.setCategoryId(request.getCategoryId());
        if (request.getIsFeatured() != null) {
            product.setIsFeatured(request.getIsFeatured());
        }

        return mapToDto(productRepository.save(product));
    }

    /**
     * Soft delete — ürünü pasif yap
     */
    @Transactional
    public void deactivateProduct(String ownerEmail, Long productId) {
        Product product = findAndVerifyOwnership(ownerEmail, productId);
        product.setIsActive(false);
        productRepository.save(product);
    }

    /**
     * Ürünü tekrar aktif yap
     */
    @Transactional
    public void reactivateProduct(String ownerEmail, Long productId) {
        Product product = findAndVerifyOwnership(ownerEmail, productId);
        product.setIsActive(true);
        productRepository.save(product);
    }

    // ─── Helpers ──────────────────────────────────────────────────

    private Product findAndVerifyOwnership(String ownerEmail, Long productId) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Ürün bulunamadı: " + productId));

        if (!product.getStore().getId().equals(store.getId())) {
            throw new IllegalStateException("Bu ürün sizin mağazanıza ait değil");
        }
        return product;
    }

    private CorporateProductDto mapToDto(Product p) {
        String categoryName = null;
        if (p.getCategoryId() != null) {
            categoryName = categoryRepository.findById(p.getCategoryId())
                    .map(Category::getName)
                    .orElse(null);
        }

        return CorporateProductDto.builder()
                .id(p.getId())
                .sku(p.getSku())
                .name(p.getName())
                .description(p.getDescription())
                .unitPrice(p.getUnitPrice())
                .originalPrice(p.getOriginalPrice())
                .stockQuantity(p.getStockQuantity())
                .categoryId(p.getCategoryId())
                .categoryName(categoryName)
                .imageUrl(p.getImageUrl())
                .averageRating(p.getAverageRating())
                .reviewCount(p.getReviewCount())
                .isFeatured(p.getIsFeatured())
                .isActive(p.getIsActive())
                .createdAt(p.getCreatedAt())
                .images(productImageService.mapImages(p.getImages()))
                .build();
    }
}
