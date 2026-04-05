package com.datapulse.api.controllers;

import com.datapulse.api.dto.ProductDto;
import com.datapulse.api.services.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
// Note: We removed @CrossOrigin here because we are handling it globally in SecurityConfig now!
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<ProductDto>> getProducts(@RequestParam(required = false) String search) {
        return ResponseEntity.ok(productService.getAllProducts(search));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) {
        return ResponseEntity.ok(productService.getProductById(id));
    }
}