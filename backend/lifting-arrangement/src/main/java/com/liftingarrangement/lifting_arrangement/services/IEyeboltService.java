package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Eyebolt;

import java.util.List;

public interface IEyeboltService {
    public Eyebolt getEyebolt(Long id);
    public List<Eyebolt> getEyebolts();
    public Eyebolt createEyebolt(Eyebolt eyebolt);
    public void deleteEyebolt(Long id);
    public Eyebolt updateEyebolt(Eyebolt eyebolt);
}
