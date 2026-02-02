package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Hook;
import com.liftingarrangement.lifting_arrangement.services.IHookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hooks")
public class HookController {
    @Autowired
    private IHookService service;

    @GetMapping
    public List<Hook> getHooks() { return service.getHooks(); }

    @GetMapping("{id}")
    public Hook getHook(@PathVariable("id")Long id) { return service.getHook(id); }

    @PostMapping
    public Hook createHok(@RequestBody Hook hook) { return service.createHook(hook); }

    @DeleteMapping("{id}")
    public void deleteHook(@PathVariable("id")Long id) { service.deleteHook(id); }

    @PutMapping
    public Hook updateHook(@RequestBody Hook hook) { return service.updateHook(hook); }
}
