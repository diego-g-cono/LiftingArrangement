package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.ConnectingLink;

import java.util.List;

public interface IConnectingLinkService {
    public ConnectingLink getConnectingLink(Long id);
    public List<ConnectingLink> getConnectingLinks();
    public ConnectingLink createConnectingLink(ConnectingLink connectingLink);
    public void deleteConnectingLink(Long id);
    public ConnectingLink updateConnectingLink(ConnectingLink connectingLink);
}
