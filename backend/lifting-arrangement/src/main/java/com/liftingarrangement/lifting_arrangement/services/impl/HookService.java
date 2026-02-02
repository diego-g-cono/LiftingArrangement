package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Hook;
import com.liftingarrangement.lifting_arrangement.repositories.HookRepository;
import com.liftingarrangement.lifting_arrangement.services.IHookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class HookService implements IHookService {
    @Autowired
    private HookRepository repository;

    public Hook getHook(Long id) { return repository.findById(id).get(); }

    public List<Hook> getHooks() { return repository.findAll(); }

    public Hook createHook(Hook hook) { return repository.save(hook); }

    public void deleteHook(Long id) { repository.deleteById(id); }

    public Hook updateHook(Hook hook) { return repository.save(hook); }

}
