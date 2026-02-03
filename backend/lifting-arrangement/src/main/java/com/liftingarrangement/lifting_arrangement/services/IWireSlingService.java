package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.WireSling;

import java.util.List;

public interface IWireSlingService {
    public WireSling getWireSling(Long id);
    public List<WireSling> getWireSlings();
    public WireSling createWireSling(WireSling wireSling);
    public void deleteWireSling(Long id);
    public WireSling updateWireSling(WireSling wireSling);
}
