package com.datapulse.api.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.InventoryItemDto;
import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.Product;
import com.datapulse.api.entities.Store;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.CategoryRepository;
import com.datapulse.api.repositories.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InventoryService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final StoreService storeService;

    private static final int LOW_STOCK_THRESHOLD = 10;

    /**
     * Mağazanın tüm aktif ürünlerinin envanter listesini döndür
     */
    @Transactional(readOnly = true)
    public List<InventoryItemDto> getInventory(String ownerEmail) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        List<Product> products = productRepository.findByStoreIdOrderByCreatedAtDesc(store.getId());
        return products.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    /**
     * Ürünün stok miktarını güncelle
     */
    @Transactional
    public InventoryItemDto updateStock(String ownerEmail, Long productId, Integer newQuantity) {
        Store store = storeService.getStoreEntityByOwnerEmail(ownerEmail);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Ürün bulunamadı: " + productId));

        if (!product.getStore().getId().equals(store.getId())) {
            throw new IllegalStateException("Bu ürün sizin mağazanıza ait değil");
        }

        product.setStockQuantity(newQuantity);
        return mapToDto(productRepository.save(product));
    }

    private InventoryItemDto mapToDto(Product p) {
        String categoryName = null;
        if (p.getCategoryId() != null) {
            categoryName = categoryRepository.findById(p.getCategoryId())
                    .map(Category::getName)
                    .orElse(null);
        }

        String stockStatus;
        if (p.getStockQuantity() <= 0) {
            stockStatus = "OUT_OF_STOCK";
        } else if (p.getStockQuantity() < LOW_STOCK_THRESHOLD) {
            stockStatus = "LOW";
        } else {
            stockStatus = "OK";
        }

        return InventoryItemDto.builder()
                .productId(p.getId())
                .productName(p.getName())
                .sku(p.getSku())
                .categoryName(categoryName)
                .stockQuantity(p.getStockQuantity())
                .unitPrice(p.getUnitPrice())
                .isActive(p.getIsActive())
                .stockStatus(stockStatus)
                .build();
    }
}
