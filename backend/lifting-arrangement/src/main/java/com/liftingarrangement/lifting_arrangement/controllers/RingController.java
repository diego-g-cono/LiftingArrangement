package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Ring;
import com.liftingarrangement.lifting_arrangement.services.IRingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rings")
public class RingController {
    @Autowired
    private IRingService service;

    @GetMapping
    public List<Ring> getRings() { return service.getRings(); }

    @GetMapping("{id}")
    public Ring getRing(@PathVariable("id")Long id) { return service.getRing(id); }

    @PostMapping
    public Ring createRing(@RequestBody Ring ring) { return service.createRing(ring); }

    @DeleteMapping("{id}")
    public void deleteRing(@PathVariable("id")Long id){ service.deleteRing(id); }

    @PutMapping
    public Ring updateRing(@RequestBody Ring ring) { return service.updateRing(ring); }
}
