package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Shackle;
import com.liftingarrangement.lifting_arrangement.repositories.ShackleRepository;
import com.liftingarrangement.lifting_arrangement.services.IShackleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class ShackleService implements IShackleService {
    @Autowired
    private ShackleRepository repository;

    public Shackle getShackle(Long id) { return repository.findById(id).get(); }

    public List<Shackle> getShackles() { return repository.findAll(); }

    public Shackle createShackle(Shackle shackle) { return repository.save(shackle); }

    public void deleteShackle(Long id) { repository.deleteById(id); }

    public Shackle updateShackle(Shackle shackle) { return repository.save(shackle); }
}
