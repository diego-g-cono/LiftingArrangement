package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Beam;
import com.liftingarrangement.lifting_arrangement.services.IBeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/liftingBeams")
public class BeamController {
    @Autowired
    private IBeamService service;

    @GetMapping
    public List<Beam> getLiftingBeams(){
        return service.getLiftingBeams();
    }

    @GetMapping("{id}")
    public Beam getLiftingBeam(@PathVariable("id") Long id){
        return service.getLiftingBeam(id);
    }

    @PostMapping
    public Beam createLiftingBeam(@RequestBody Beam beam){
        return service.createLiftingBeam(beam);
    }

    @DeleteMapping("{id}")
    public void deleteLiftingBeam(@PathVariable("id")Long id){
        service.deleteLiftingBeam(id);
    }

    @PutMapping
    public Beam updateLiftingBeam(@RequestBody Beam beam){
        return service.updateLiftingBeam(beam);
    }
}
