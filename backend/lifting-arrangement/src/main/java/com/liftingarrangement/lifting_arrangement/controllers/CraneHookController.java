package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.CraneHook;
import com.liftingarrangement.lifting_arrangement.services.ICraneHookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/craneHooks")
public class CraneHookController {
    @Autowired
    private ICraneHookService service;

    @GetMapping
    public List<CraneHook> getCraneHooks() { return service.getCraneHooks(); }

    @GetMapping("{id}")
    public CraneHook getCraneHook(@PathVariable("id") Long id) { return service.getCraneHook(id); }

    @PostMapping
    public CraneHook createCraneHook(@RequestBody CraneHook craneHook) { return service.createCraneHook(craneHook); }

    @DeleteMapping("{id}")
    public void deleteCraneHook(@PathVariable("id")Long id) { service.deleteCraneHook(id); }

    @PutMapping
    public CraneHook updateCraneHook(@RequestBody CraneHook craneHook) { return service.updateCraneHook(craneHook); }
}
