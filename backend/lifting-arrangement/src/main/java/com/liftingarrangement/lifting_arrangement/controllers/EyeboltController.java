package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Eyebolt;
import com.liftingarrangement.lifting_arrangement.services.IEyeboltService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/eyebolts")
public class EyeboltController {
    @Autowired
    private IEyeboltService service;

    @GetMapping
    public List<Eyebolt> getEyebolts() { return service.getEyebolts(); }

    @GetMapping("{id}")
    public Eyebolt getEyebolt(@PathVariable("id") Long id) { return service.getEyebolt(id); }

    @PostMapping
    public Eyebolt cretateEyebolt(@RequestBody Eyebolt eyebolt) { return service.createEyebolt(eyebolt); }

    @DeleteMapping("{id}")
    public void deleteEyebolt(@PathVariable("id")Long id) { service.deleteEyebolt(id); }

    @PutMapping
    public Eyebolt updateEyebolt(@RequestBody Eyebolt eyebolt) { return service.updateEyebolt(eyebolt); }
}
