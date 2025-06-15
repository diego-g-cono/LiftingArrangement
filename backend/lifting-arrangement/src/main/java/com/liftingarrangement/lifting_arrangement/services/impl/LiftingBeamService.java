package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.LiftingBeam;
import com.liftingarrangement.lifting_arrangement.repositories.LiftingBeamRepository;
import com.liftingarrangement.lifting_arrangement.services.ILiftingBeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class LiftingBeamService implements ILiftingBeamService {
    @Autowired
    private LiftingBeamRepository repository;

    public LiftingBeam getLiftingBeam(Long id) {
        return repository.findById(id).get();
    }

    public List<LiftingBeam> getLiftingBeams() {
        return repository.findAll();
    }

    public LiftingBeam createLiftingBeam(LiftingBeam liftingBeam) {
        return repository.save(liftingBeam);
    }

    public void deleteLiftingBeam(Long id) {
        repository.deleteById(id);
    }

    public LiftingBeam updateLiftingBeam(LiftingBeam liftingBeam) {
        return repository.save(liftingBeam);
    }
}
