package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.User;

import java.util.List;

public interface IUserService {

    public User getUserLA(Long id);
    public List<User> getUsersLA();
    public User createUserLA(User user);
    public void deleteUserLA (Long id);
    public User updateUserLA(User user);
}
