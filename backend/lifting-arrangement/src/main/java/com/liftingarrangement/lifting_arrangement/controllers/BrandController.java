package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Brand;
import com.liftingarrangement.lifting_arrangement.services.IBrandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/brands")
public class BrandController {
    @Autowired
    private IBrandService service;

    @GetMapping
    public List<Brand> getBrands() { return service.getBrands(); }

    @GetMapping("{id}")
    public Brand getBrand(@PathVariable("id") Long id) { return service.getBrand(id); }

    @PostMapping
    public Brand createBrand(@RequestBody Brand brand) { return service.createBrand(brand); }

    @DeleteMapping("{id}")
    public void deleteBrand(@PathVariable("id")Long id) { service.deleteBrand(id); }

    @PutMapping
    public Brand updateBrand(@RequestBody Brand brand) { return service.updateBrand(brand); }
}
