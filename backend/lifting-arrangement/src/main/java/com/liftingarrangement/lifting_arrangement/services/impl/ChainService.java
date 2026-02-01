package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Chain;
import com.liftingarrangement.lifting_arrangement.repositories.ChainRepository;
import com.liftingarrangement.lifting_arrangement.services.IChainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class ChainService implements IChainService {
    @Autowired
    private ChainRepository repository;

    public Chain getChain(Long id) { return repository.findById(id).get(); }

    public List<Chain> getChains() { return repository.findAll(); }

    public Chain createChain(Chain chain) { return repository.save(chain); }

    public void deleteChain(Long id) { repository.deleteById(id); }

    public Chain updateChain(Chain chain) { return repository.save(chain); }
}
