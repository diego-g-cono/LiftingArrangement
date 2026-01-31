package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Beam;
import com.liftingarrangement.lifting_arrangement.repositories.BeamRepository;
import com.liftingarrangement.lifting_arrangement.services.IBeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class BeamService implements IBeamService {
    @Autowired
    private BeamRepository repository;

    public Beam getBeam(Long id) {
        return repository.findById(id).get();
    }

    public List<Beam> getBeams() {
        return repository.findAll();
    }

    public Beam createBeam(Beam beam) {
        return repository.save(beam);
    }

    public void deleteBeam(Long id) {
        repository.deleteById(id);
    }

    public Beam updateBeam(Beam beam) {
        return repository.save(beam);
    }
}
