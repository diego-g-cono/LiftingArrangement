package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.WebbingSling;

import java.util.List;

public interface IWebbingSlingService {
    public WebbingSling getWebbingSling(Long id);
    public List<WebbingSling> getWebbingSlings();
    public WebbingSling createWebbingSling(WebbingSling webbingSling);
    public void deleteWebbingSling(Long id);
    public WebbingSling updateWebbingSling(WebbingSling webbingSling);
}
