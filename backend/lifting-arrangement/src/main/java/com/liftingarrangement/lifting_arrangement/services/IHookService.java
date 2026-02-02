package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Hook;

import java.util.List;

public interface IHookService {
    public Hook getHook(Long id);
    public List<Hook> getHooks();
    public Hook createHook(Hook hook);
    public void deleteHook(Long id);
    public Hook updateHook(Hook hook);
}
