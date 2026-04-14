package com.datapulse.api.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.datapulse.api.dto.StoreDto;
import com.datapulse.api.dto.StoreRequest;
import com.datapulse.api.entities.Store;
import com.datapulse.api.entities.User;
import com.datapulse.api.exceptions.ResourceNotFoundException;
import com.datapulse.api.repositories.StoreRepository;
import com.datapulse.api.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StoreService {

    private final StoreRepository storeRepository;
    private final UserRepository userRepository;

    @Transactional
    public StoreDto createStore(String ownerEmail, StoreRequest request) {
        User owner = userRepository.findByEmail(ownerEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));

        // Kullanıcının zaten mağazası var mı kontrol et
        List<Store> existingStores = storeRepository.findByOwner(owner);
        if (!existingStores.isEmpty()) {
            throw new IllegalStateException("Bu kullanıcının zaten bir mağazası bulunmaktadır");
        }

        Store store = Store.builder()
                .owner(owner)
                .name(request.getName())
                .description(request.getDescription())
                .baseCurrency(request.getBaseCurrency())
                .status("ACTIVE")
                .build();

        Store savedStore = storeRepository.save(store);
        return mapToDto(savedStore);
    }

    @Transactional(readOnly = true)
    public StoreDto getMyStore(String ownerEmail) {
        User owner = userRepository.findByEmail(ownerEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));

        List<Store> stores = storeRepository.findByOwner(owner);
        if (stores.isEmpty()) {
            throw new ResourceNotFoundException("Mağaza bulunamadı");
        }

        return mapToDto(stores.get(0));
    }

    @Transactional
    public StoreDto updateStore(String ownerEmail, StoreRequest request) {
        User owner = userRepository.findByEmail(ownerEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));

        List<Store> stores = storeRepository.findByOwner(owner);
        if (stores.isEmpty()) {
            throw new ResourceNotFoundException("Mağaza bulunamadı");
        }

        Store store = stores.get(0);
        store.setName(request.getName());
        store.setDescription(request.getDescription());
        store.setBaseCurrency(request.getBaseCurrency());

        return mapToDto(storeRepository.save(store));
    }

    /**
     * İç kullanım — JWT'den gelen email ile mağazayı bul.
     * Controller ve diğer servisler tarafından kullanılır.
     */
    @Transactional(readOnly = true)
    public Store getStoreEntityByOwnerEmail(String ownerEmail) {
        User owner = userRepository.findByEmail(ownerEmail)
                .orElseThrow(() -> new ResourceNotFoundException("Kullanıcı bulunamadı"));

        List<Store> stores = storeRepository.findByOwner(owner);
        if (stores.isEmpty()) {
            throw new ResourceNotFoundException("Mağaza bulunamadı");
        }
        return stores.get(0);
    }

    private StoreDto mapToDto(Store store) {
        return StoreDto.builder()
                .id(store.getId())
                .name(store.getName())
                .description(store.getDescription())
                .status(store.getStatus())
                .baseCurrency(store.getBaseCurrency())
                .createdAt(store.getCreatedAt())
                .build();
    }
}
