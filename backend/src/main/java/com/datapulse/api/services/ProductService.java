package com.datapulse.api.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.datapulse.api.dto.ProductDto;
import com.datapulse.api.entities.Product;
import com.datapulse.api.repositories.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductDto> getAllProducts(String search) {
        List<Product> products;
        
        if (search != null && !search.isEmpty()) {
            products = productRepository.findByNameContainingIgnoreCase(search);
        } else {
            products = productRepository.findAll();
        }

        return products.stream().map(this::mapToDto).collect(Collectors.toList());
    }

    public ProductDto getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found")); // Will hook into global exception handler later [cite: 64]
        return mapToDto(product);
    }

    // Helper method to map Entity to DTO
    private ProductDto mapToDto(Product product) {
        ProductDto dto = new ProductDto();
        dto.setId(product.getId());
        dto.setSku(product.getSku());
        dto.setName(product.getName());
        dto.setPrice(product.getUnitPrice());
        
        // Add the original price for the strikethrough UI
        if (product.getOriginalPrice() != null) {
            dto.setOriginalPrice(product.getOriginalPrice());
        }
        
        dto.setCategory("Electronics"); 
        dto.setRating(product.getAverageRating()); // Use the real DB value
        dto.setReviewCount(product.getReviewCount()); // Use the real DB value
        dto.setImageUrl(product.getImageUrl()); // Use the real DB value
        
        return dto;
    }
}