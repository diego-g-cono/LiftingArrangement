package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.Chain;

import java.util.List;

public interface IChainService {
    public Chain getChain(Long id);
    public List<Chain> getChains();
    public Chain createChain(Chain chain);
    public void deleteChain(Long id);
    public Chain updateChain(Chain chain);
}
