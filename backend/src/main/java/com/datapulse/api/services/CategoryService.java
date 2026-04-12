package com.datapulse.api.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.datapulse.api.dto.CategoryDto;
import com.datapulse.api.entities.Category;
import com.datapulse.api.repositories.CategoryRepository;

@Service
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    // Returns the nested tree structure
    public List<CategoryDto> getCategoryTree() {
        List<Category> allCategories = categoryRepository.findAll();
        
        // Find roots
        List<Category> rootCategories = allCategories.stream()
                .filter(c -> c.getParent() == null)
                .collect(Collectors.toList());

        return rootCategories.stream()
                .map(this::mapToTreeDto)
                .collect(Collectors.toList());
    }

    // Returns a flat list with names formatted as "Parent > Child"
    public List<CategoryDto> getFlatCategories() {
        List<Category> allCategories = categoryRepository.findAll();
        List<CategoryDto> flatList = new ArrayList<>();
        
        for (Category category : allCategories) {
            String fullName = buildFullName(category);
            flatList.add(CategoryDto.builder()
                .id(category.getId())
                .name(fullName)
                .parentId(category.getParent() != null ? category.getParent().getId() : null)
                .children(new ArrayList<>())
                .build());
        }
        
        return flatList;
    }

    private CategoryDto mapToTreeDto(Category category) {
        List<CategoryDto> childrenDtos = new ArrayList<>();
        if (category.getSubCategories() != null && !category.getSubCategories().isEmpty()) {
            childrenDtos = category.getSubCategories().stream()
                    .map(this::mapToTreeDto)
                    .collect(Collectors.toList());
        }

        return CategoryDto.builder()
                .id(category.getId())
                .name(category.getName())
                .parentId(category.getParent() != null ? category.getParent().getId() : null)
                .children(childrenDtos)
                .build();
    }

    private String buildFullName(Category category) {
        if (category.getParent() == null) {
            return category.getName();
        }
        return buildFullName(category.getParent()) + " > " + category.getName();
    }
}