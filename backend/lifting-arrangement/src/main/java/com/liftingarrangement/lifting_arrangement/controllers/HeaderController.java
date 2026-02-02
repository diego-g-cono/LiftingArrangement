package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.Header;
import com.liftingarrangement.lifting_arrangement.services.IHeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/headers")
public class HeaderController {
    @Autowired
    private IHeaderService service;

    @GetMapping
    public List<Header> getHeaders() { return service.getHeaders(); }

    @GetMapping("{id}")
    public Header getHeader(@PathVariable("id") Long id) { return service.getHeader(id); }

    @PostMapping
    public Header createHeader(@RequestBody Header header) { return service.createHeader(header); }

    @DeleteMapping("{id}")
    public void deleteHeader(@PathVariable("id") Long id) { service.deleteHeader(id); }

    @PutMapping
    public Header updateHeader(@RequestBody Header header) { return service.updateHeader(header); }
}
