package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.LiftingArrangement;
import com.liftingarrangement.lifting_arrangement.services.ILiftingArrangementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/liftingArrangements")
public class LiftingArrangementController {
    @Autowired
    private ILiftingArrangementService service;

    @GetMapping
    public List<LiftingArrangement> getLiftingArrangements(){return service.getLiftingArrangements();}

    @GetMapping("{id}")
    public LiftingArrangement getLiftingArrangement(@PathVariable("id")Long id){return service.getLiftingArrangement(id);}

    @PostMapping
    public LiftingArrangement createLiftingArrangement(@RequestBody LiftingArrangement liftingArrangement){return service.createLiftingArrangement(liftingArrangement);}

    @DeleteMapping("{id}")
    public void deleteLiftingArrangement(@PathVariable("id")Long id){service.deleteLiftingArrangement(id);}

    @PutMapping
    public LiftingArrangement updateLiftingArrangement(@RequestBody LiftingArrangement liftingArrangement){return service.updateLiftingArrangement(liftingArrangement);}
}
