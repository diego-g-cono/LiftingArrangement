package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Ring;

import java.util.List;

public interface IRingService {
    public Ring getRing(Long id);
    public List<Ring> getRings();
    public Ring createRing(Ring ring);
    public void deleteRing(Long id);
    public Ring updateRing(Ring ring);
}
