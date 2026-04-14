package com.datapulse.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StoreRequest {

    @NotBlank(message = "Mağaza adı boş olamaz")
    @Size(min = 2, max = 100, message = "Mağaza adı 2-100 karakter arasında olmalıdır")
    private String name;

    private String description;

    @NotBlank(message = "Para birimi boş olamaz")
    @Size(min = 3, max = 3, message = "Para birimi 3 karakter olmalıdır (ör: USD, TRY)")
    private String baseCurrency;
}
