package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.ConnectingLink;
import com.liftingarrangement.lifting_arrangement.services.IConnectingLinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/connectingLinks")
public class ConnectingLinkController {
    @Autowired
    private IConnectingLinkService service;

    @GetMapping
    public List<ConnectingLink> getConnectingLink() { return service.getConnectingLinks(); }

    @GetMapping("{id}")
    public ConnectingLink getConnectingLink(@PathVariable("id") Long id) { return service.getConnectingLink(id); }

    @PostMapping
    public ConnectingLink createConnectingLink(@RequestBody ConnectingLink connectingLink) { return service.createConnectingLink(connectingLink); }

    @DeleteMapping("{id}")
    public void deleteConnectingLink(@PathVariable("id")Long id) { service.deleteConnectingLink(id); }

    @PutMapping
    public ConnectingLink updateConnectingLink(@RequestBody ConnectingLink connectingLink) { return service.updateConnectingLink(connectingLink); }
}
