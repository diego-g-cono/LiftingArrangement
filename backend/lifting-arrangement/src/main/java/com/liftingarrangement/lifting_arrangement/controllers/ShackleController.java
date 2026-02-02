package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Shackle;
import com.liftingarrangement.lifting_arrangement.services.IShackleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/shackles")
public class ShackleController {
    @Autowired
    private IShackleService service;

    @GetMapping
    public List<Shackle> getShackles() { return service.getShackles(); }

    @GetMapping("{id}")
    public Shackle getShackle(@PathVariable("id")Long id) { return service.getShackle(id); }

    @PostMapping
    public Shackle createShackle(@RequestBody Shackle shackle) { return service.createShackle(shackle); }

    @DeleteMapping("{id}")
    public void deleteRing(@PathVariable("id")Long id) { service.deleteShackle(id); }

    @PutMapping
    public Shackle updateShackle(@RequestBody Shackle shackle) { return service.updateShackle(shackle); }
}
