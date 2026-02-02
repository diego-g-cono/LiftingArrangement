package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Shackle;

import java.util.List;

public interface IShackleService {
    public Shackle getShackle(Long id);
    public List<Shackle> getShackles();
    public Shackle createShackle(Shackle shackle);
    public void deleteShackle(Long id);
    public Shackle updateShackle(Shackle shackle);
}
