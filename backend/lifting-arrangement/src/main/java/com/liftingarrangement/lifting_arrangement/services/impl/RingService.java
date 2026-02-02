package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Ring;
import com.liftingarrangement.lifting_arrangement.repositories.RingRepository;
import com.liftingarrangement.lifting_arrangement.services.IRingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class RingService implements IRingService {
    @Autowired
    private RingRepository repository;

    public Ring getRing(Long id) { return repository.findById(id).get(); }

    public List<Ring> getRings() { return repository.findAll(); }

    public Ring createRing(Ring ring) { return repository.save(ring); }

    public void deleteRing(Long id) { repository.deleteById(id); }

    public Ring updateRing(Ring ring) { return repository.save(ring); }
}
