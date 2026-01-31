package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Beam;

import java.util.List;

public interface IBeamService {
    public Beam getBeam(Long id);
    public List<Beam> getBeams();
    public Beam createBeam(Beam beam);
    public void deleteBeam(Long id);
    public Beam updateBeam(Beam beam);
}
