package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.WebbingSling;
import com.liftingarrangement.lifting_arrangement.services.IWebbingSlingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/webbingSlings")
public class WebbingSlingController {
    @Autowired
    private IWebbingSlingService service;

    @GetMapping
    public List<WebbingSling> getWebbingSlings(){return service.getWebbingSlings();}

    @GetMapping("{id}")
    public WebbingSling getWebbingSling(@PathVariable("id")Long id){return service.getWebbingSling(id);}

    @PostMapping
    public WebbingSling createWebbingSling(@RequestBody WebbingSling webbingSling){return service.createWebbingSling(webbingSling);}

    @DeleteMapping("{id}")
    public void deleteWebbingSling(@PathVariable("id")Long id){service.deleteWebbingSling(id);}

    @PutMapping
    public WebbingSling updateWebbingSling(@RequestBody WebbingSling webbingSling){return service.updateWebbingSling(webbingSling);}
}
