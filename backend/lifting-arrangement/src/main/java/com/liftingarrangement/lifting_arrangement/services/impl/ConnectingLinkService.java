package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.ConnectingLink;
import com.liftingarrangement.lifting_arrangement.repositories.ConnectingLinkRepository;
import com.liftingarrangement.lifting_arrangement.services.IConnectingLinkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class ConnectingLinkService implements IConnectingLinkService {
    @Autowired
    private ConnectingLinkRepository repository;

    public ConnectingLink getConnectingLink(Long id) { return repository.findById(id).get(); }

    public List<ConnectingLink> getConnectingLinks() { return repository.findAll(); }

    public ConnectingLink createConnectingLink(ConnectingLink connectingLink) { return repository.save(connectingLink); }

    public void deleteConnectingLink(Long id) { repository.deleteById(id); }

    public ConnectingLink updateConnectingLink(ConnectingLink connectingLink) { return repository.save(connectingLink); }
}
