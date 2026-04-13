package com.datapulse.api.controllers;

import com.datapulse.api.dto.ProductImageDto;
import com.datapulse.api.services.ProductImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductImageController {

    private final ProductImageService imageService;

    /** GET /api/products/{id}/images — public */
    @GetMapping("/{productId}/images")
    public ResponseEntity<List<ProductImageDto>> getImages(@PathVariable Long productId) {
        return ResponseEntity.ok(imageService.getImages(productId));
    }

    /** POST /api/products/{id}/images — multipart upload */
    @PostMapping(value = "/{productId}/images", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasAnyRole('ADMIN', 'CORPORATE')")
    public ResponseEntity<?> uploadImage(
            @PathVariable Long productId,
            @RequestPart("file") MultipartFile file,
            @RequestPart(value = "altText", required = false) String altText,
            @RequestParam(value = "primary", defaultValue = "false") boolean primary,
            Authentication authentication) {
        try {
            ProductImageDto dto = imageService.uploadImage(productId, file, altText, primary, authentication.getName());
            return ResponseEntity.ok(dto);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(403).body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", "Upload failed: " + e.getMessage()));
        }
    }

    /** PATCH /api/products/images/{imageId}/primary */
    @PatchMapping("/images/{imageId}/primary")
    @PreAuthorize("hasAnyRole('ADMIN', 'CORPORATE')")
    public ResponseEntity<?> setPrimary(@PathVariable Long imageId, Authentication authentication) {
        try {
            return ResponseEntity.ok(imageService.setPrimary(imageId, authentication.getName()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(403).body(Map.of("error", e.getMessage()));
        }
    }

    /** DELETE /api/products/images/{imageId} */
    @DeleteMapping("/images/{imageId}")
    @PreAuthorize("hasAnyRole('ADMIN', 'CORPORATE')")
    public ResponseEntity<?> deleteImage(@PathVariable Long imageId, Authentication authentication) {
        try {
            imageService.deleteImage(imageId, authentication.getName());
            return ResponseEntity.ok(Map.of("message", "Image deleted successfully"));
        } catch (RuntimeException e) {
            return ResponseEntity.status(403).body(Map.of("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(Map.of("error", e.getMessage()));
        }
    }

    /** PATCH /api/products/{id}/images/reorder — body: [id1, id2, id3] */
    @PatchMapping("/{productId}/images/reorder")
    @PreAuthorize("hasAnyRole('ADMIN', 'CORPORATE')")
    public ResponseEntity<?> reorder(
            @PathVariable Long productId,
            @RequestBody List<Long> orderedIds,
            Authentication authentication) {
        try {
            return ResponseEntity.ok(imageService.reorder(productId, orderedIds, authentication.getName()));
        } catch (RuntimeException e) {
            return ResponseEntity.status(403).body(Map.of("error", e.getMessage()));
        }
    }
}
