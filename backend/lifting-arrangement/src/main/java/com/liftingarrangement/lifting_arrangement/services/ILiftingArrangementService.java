package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.LiftingArrangement;

import java.util.List;

public interface ILiftingArrangementService {
    public LiftingArrangement getLiftingArrangement(Long id);
    public List<LiftingArrangement> getLiftingArrangements();
    public LiftingArrangement createLiftingArrangement(LiftingArrangement liftingArrangement);
    public void deleteLiftingArrangement(Long id);
    public LiftingArrangement updateLiftingArrangement(LiftingArrangement liftingArrangement);
}
