package com.datapulse.api.services;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import com.datapulse.api.dto.ProductDto;
import com.datapulse.api.entities.Category;
import com.datapulse.api.entities.Product;
import com.datapulse.api.repositories.CategoryRepository;
import com.datapulse.api.repositories.ProductRepository;
import com.datapulse.api.repositories.ProductSpecification;

@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<ProductDto> getAllProducts(String search, Long categoryId, BigDecimal minPrice, BigDecimal maxPrice, String sortBy) {
        Specification<Product> spec = Specification.where(ProductSpecification.hasNameOrDescription(search))
                .and(ProductSpecification.hasCategoryId(categoryId))
                .and(ProductSpecification.priceGreaterThanOrEqual(minPrice))
                .and(ProductSpecification.priceLessThanOrEqual(maxPrice));

        Sort sort = Sort.unsorted();
        if (sortBy != null && !sortBy.isEmpty()) {
            if (sortBy.equalsIgnoreCase("price_asc")) {
                sort = Sort.by(Sort.Direction.ASC, "unitPrice");
            } else if (sortBy.equalsIgnoreCase("price_desc")) {
                sort = Sort.by(Sort.Direction.DESC, "unitPrice");
            } else if (sortBy.equalsIgnoreCase("rating_desc")) {
                sort = Sort.by(Sort.Direction.DESC, "averageRating");
            } else if (sortBy.equalsIgnoreCase("newest")) {
                sort = Sort.by(Sort.Direction.DESC, "createdAt");
            }
        }

        List<Product> products = productRepository.findAll(spec, sort);
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
        
        String categoryName = "Electronics";
        if (product.getCategoryId() != null) {
            categoryName = categoryRepository.findById(product.getCategoryId())
                .map(Category::getName).orElse("General");
        }
        dto.setCategory(categoryName); 
        dto.setRating(product.getAverageRating()); // Use the real DB value
        dto.setReviewCount(product.getReviewCount()); // Use the real DB value
        dto.setImageUrl(product.getImageUrl()); // Use the real DB value
        
        return dto;
    }
}