package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Beam;

import java.util.List;

public interface IBeamService {
    public Beam getLiftingBeam(Long id);
    public List<Beam> getLiftingBeams();
    public Beam createLiftingBeam(Beam beam);
    public void deleteLiftingBeam (Long id);
    public Beam updateLiftingBeam(Beam beam);
}
