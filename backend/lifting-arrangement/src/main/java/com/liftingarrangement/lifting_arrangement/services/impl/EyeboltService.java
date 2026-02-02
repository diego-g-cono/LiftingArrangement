package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Eyebolt;
import com.liftingarrangement.lifting_arrangement.repositories.EyeboltRepository;
import com.liftingarrangement.lifting_arrangement.services.IEyeboltService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class EyeboltService implements IEyeboltService {
    @Autowired
    private EyeboltRepository repository;

    public Eyebolt getEyebolt(Long id) { return repository.findById(id).get(); }

    public List<Eyebolt> getEyebolts() { return repository.findAll(); }

    public Eyebolt createEyebolt(Eyebolt eyebolt) { return repository.save(eyebolt); }

    public void deleteEyebolt(Long id) { repository.deleteById(id); }

    public Eyebolt updateEyebolt(Eyebolt eyebolt) { return repository.save(eyebolt); }
}
