package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.LiftingBeam;

import java.util.List;

public interface ILiftingBeamService {
    public LiftingBeam getLiftingBeam(Long id);
    public List<LiftingBeam> getLiftingBeams();
    public LiftingBeam createLiftingBeam(LiftingBeam liftingBeam);
    public void deleteLiftingBeam (Long id);
    public LiftingBeam updateLiftingBeam(LiftingBeam liftingBeam);
}
