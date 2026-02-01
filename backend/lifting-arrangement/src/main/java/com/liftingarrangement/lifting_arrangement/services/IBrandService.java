package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Brand;

import java.util.List;

public interface IBrandService {
    public Brand getBrand(Long id);
    public List<Brand> getBrands();
    public Brand createBrand(Brand brand);
    public void deleteBrand(Long id);
    public Brand updateBrand(Brand brand);
}
