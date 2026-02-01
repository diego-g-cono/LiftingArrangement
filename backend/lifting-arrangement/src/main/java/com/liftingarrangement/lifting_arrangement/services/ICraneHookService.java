package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.CraneHook;

import java.util.List;

public interface ICraneHookService {
    public CraneHook getCraneHook(Long id);
    public List<CraneHook> getCraneHooks();
    public CraneHook createCraneHook(CraneHook craneHook);
    public void deleteCraneHook(Long id);
    public CraneHook updateCraneHook(CraneHook craneHook);
}
