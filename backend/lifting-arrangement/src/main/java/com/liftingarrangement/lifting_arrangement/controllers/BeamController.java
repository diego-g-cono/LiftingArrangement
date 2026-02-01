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
    public List<Beam> getBeams(){
        return service.getBeams();
    }

    @GetMapping("{id}")
    public Beam getBeam(@PathVariable("id") Long id){
        return service.getBeam(id);
    }

    @PostMapping
    public Beam createBeam(@RequestBody Beam beam){
        return service.createBeam(beam);
    }

    @DeleteMapping("{id}")
    public void deleteBeam(@PathVariable("id")Long id){
        service.deleteBeam(id);
    }

    @PutMapping
    public Beam updateBeam(@RequestBody Beam beam){
        return service.updateBeam(beam);
    }
}
