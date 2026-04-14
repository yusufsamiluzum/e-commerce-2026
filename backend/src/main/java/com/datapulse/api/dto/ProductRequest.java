package com.datapulse.api.dto;

import java.math.BigDecimal;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {

    @NotBlank(message = "SKU boş olamaz")
    @Size(max = 50, message = "SKU en fazla 50 karakter olabilir")
    private String sku;

    @NotBlank(message = "Ürün adı boş olamaz")
    @Size(min = 2, max = 200, message = "Ürün adı 2-200 karakter arasında olmalıdır")
    private String name;

    private String description;

    @NotNull(message = "Birim fiyat boş olamaz")
    @DecimalMin(value = "0.01", message = "Birim fiyat en az 0.01 olmalıdır")
    private BigDecimal unitPrice;

    @DecimalMin(value = "0.00", message = "Orijinal fiyat 0 veya üzeri olmalıdır")
    private BigDecimal originalPrice;

    @NotNull(message = "Stok miktarı boş olamaz")
    @Min(value = 0, message = "Stok miktarı 0 veya üzeri olmalıdır")
    private Integer stockQuantity;

    private Long categoryId;

    private Boolean isFeatured;
}
