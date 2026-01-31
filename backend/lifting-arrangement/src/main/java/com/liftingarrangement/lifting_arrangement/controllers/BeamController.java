package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Beam;
import com.liftingarrangement.lifting_arrangement.services.IBeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/beams")
public class BeamController {
    @Autowired
    private IBeamService service;

    @GetMapping
    public List<Beam> getLiftingBeams(){
        return service.getBeams();
    }

    @GetMapping("{id}")
    public Beam getLiftingBeam(@PathVariable("id") Long id){
        return service.getBeam(id);
    }

    @PostMapping
    public Beam createLiftingBeam(@RequestBody Beam beam){
        return service.createBeam(beam);
    }

    @DeleteMapping("{id}")
    public void deleteLiftingBeam(@PathVariable("id")Long id){
        service.deleteBeam(id);
    }

    @PutMapping
    public Beam updateLiftingBeam(@RequestBody Beam beam){
        return service.updateBeam(beam);
    }
}
