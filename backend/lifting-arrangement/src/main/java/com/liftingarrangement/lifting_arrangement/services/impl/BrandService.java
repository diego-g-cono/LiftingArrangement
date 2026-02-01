package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Brand;
import com.liftingarrangement.lifting_arrangement.repositories.BrandRepository;
import com.liftingarrangement.lifting_arrangement.services.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class BrandService implements IBrandService {
    @Autowired
    private BrandRepository repository;

    public Brand getBrand(Long id) { return repository.findById(id).get(); }

    public List<Brand> getBrands() { return repository.findAll(); }

    public Brand createBrand(Brand brand) {
        return repository.save(brand);
    }

    public void deleteBrand(Long id) {
        repository.deleteById(id);
    }

    public Brand updateBrand(Brand brand) {
        return repository.save(brand);
    }
}
