package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.WireSling;
import com.liftingarrangement.lifting_arrangement.services.IWireSlingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/wireSlings")
public class WireSlingController {
    @Autowired
    private IWireSlingService service;

    @GetMapping
    public List<WireSling> getWireSlings(){return service.getWireSlings();}

    @GetMapping("{id}")
    public WireSling getWireSling(@PathVariable("id")Long id){return service.getWireSling(id);}

    @PostMapping
    public WireSling createWireSling(@RequestBody WireSling wireSling){return service.createWireSling(wireSling);}

    @DeleteMapping("{id}")
    public void deleteWireSling(@PathVariable("id")Long id){service.deleteWireSling(id);}

    @PutMapping
    public WireSling updateWireSling(@RequestBody WireSling wireSling){return service.updateWireSling(wireSling);}
}
