package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.CraneHook;
import com.liftingarrangement.lifting_arrangement.repositories.CraneHookRepository;
import com.liftingarrangement.lifting_arrangement.services.ICraneHookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class CraneHookService implements ICraneHookService {
    @Autowired
    private CraneHookRepository repository;

    public CraneHook getCraneHook(Long id) { return repository.findById(id).get(); }

    public List<CraneHook> getCraneHooks() { return repository.findAll(); }

    public CraneHook createCraneHook(CraneHook craneHook) { return repository.save(craneHook); }

    public void deleteCraneHook(Long id) { repository.deleteById(id); }

    public CraneHook updateCraneHook(CraneHook craneHook) { return repository.save(craneHook); }
}
