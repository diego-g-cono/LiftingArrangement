package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.LiftingArrangement;
import com.liftingarrangement.lifting_arrangement.repositories.LiftingArrangementRepository;
import com.liftingarrangement.lifting_arrangement.services.ILiftingArrangementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class LiftingArrangementService implements ILiftingArrangementService {
    @Autowired
    private LiftingArrangementRepository repository;

    public LiftingArrangement getLiftingArrangement(Long id){return repository.findById(id).get();}

    public List<LiftingArrangement> getLiftingArrangements(){return repository.findAll();}

    public LiftingArrangement createLiftingArrangement(LiftingArrangement liftingArrangement){return repository.save(liftingArrangement);}

    public void deleteLiftingArrangement(Long id){repository.deleteById(id);}

    public LiftingArrangement updateLiftingArrangement(LiftingArrangement liftingArrangement){return repository.save(liftingArrangement);}
}
