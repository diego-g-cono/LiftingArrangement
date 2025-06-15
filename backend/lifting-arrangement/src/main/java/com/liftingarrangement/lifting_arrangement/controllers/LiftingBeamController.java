package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.LiftingBeam;
import com.liftingarrangement.lifting_arrangement.services.ILiftingBeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/liftingBeams")
public class LiftingBeamController {
    @Autowired
    private ILiftingBeamService service;

    @GetMapping
    public List<LiftingBeam> getLiftingBeams(){
        return service.getLiftingBeams();
    }

    @GetMapping("{id}")
    public LiftingBeam getLiftingBeam(@PathVariable("id") Long id){
        return service.getLiftingBeam(id);
    }

    @PostMapping
    public LiftingBeam createLiftingBeam(@RequestBody LiftingBeam liftingBeam){
        return service.createLiftingBeam(liftingBeam);
    }

    @DeleteMapping("{id}")
    public void deleteLiftingBeam(@PathVariable("id")Long id){
        service.deleteLiftingBeam(id);
    }

    @PutMapping
    public LiftingBeam updateLiftingBeam(@RequestBody LiftingBeam liftingBeam){
        return service.updateLiftingBeam(liftingBeam);
    }
}
