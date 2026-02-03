package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.WireSling;
import com.liftingarrangement.lifting_arrangement.repositories.WireSlingRepository;
import com.liftingarrangement.lifting_arrangement.services.IWireSlingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class WireSlingService implements IWireSlingService {
    @Autowired
    private WireSlingRepository repository;

    public WireSling getWireSling(Long id){return repository.findById(id).get();}

    public List<WireSling> getWireSlings(){return repository.findAll();}

    public WireSling createWireSling(WireSling wireSling){return repository.save(wireSling);}

    public void deleteWireSling(Long id){repository.deleteById(id);}

    public WireSling updateWireSling(WireSling wireSling){return repository.save(wireSling);}
}
