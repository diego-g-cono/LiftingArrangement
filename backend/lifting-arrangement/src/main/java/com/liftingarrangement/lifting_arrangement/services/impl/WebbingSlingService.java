package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.WebbingSling;
import com.liftingarrangement.lifting_arrangement.repositories.WebbingSlingRepository;
import com.liftingarrangement.lifting_arrangement.services.IWebbingSlingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class WebbingSlingService implements IWebbingSlingService {
    @Autowired
    private WebbingSlingRepository repository;

    public WebbingSling getWebbingSling(Long id){ return repository.findById(id).get(); }

    public List<WebbingSling> getWebbingSlings() {return repository.findAll();}

    public WebbingSling createWebbingSling(WebbingSling webbingSling){return repository.save(webbingSling);}

    public void deleteWebbingSling(Long id) {repository.deleteById(id);}

    public WebbingSling updateWebbingSling(WebbingSling webbingSling){return repository.save(webbingSling);}
}
