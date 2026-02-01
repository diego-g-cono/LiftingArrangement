package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Chain;
import com.liftingarrangement.lifting_arrangement.services.IChainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chains")
public class ChainController {
    @Autowired
    private IChainService service;

    @GetMapping
    public List<Chain> getChains() { return service.getChains(); }

    @GetMapping("{id}")
    public Chain getChain(@PathVariable("id") Long id) { return service.getChain(id); }

    @PostMapping
    public Chain createChain(@RequestBody Chain chain) { return service.createChain(chain); }

    @DeleteMapping("{id}")
    public void deleteChain(@PathVariable("id")Long id) { service.deleteChain(id); }

    @PutMapping
    public Chain updateChain(@RequestBody Chain chain) { return service.updateChain(chain); }
}
