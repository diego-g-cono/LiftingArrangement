package com.liftingarrangement.lifting_arrangement.services;

import com.liftingarrangement.lifting_arrangement.models.UserLA;

import java.util.List;

public interface IUserLAService {

    public UserLA getUserLA(Long id);
    public List<UserLA> getUsersLA();
    public UserLA createUserLA(UserLA userLA);
    public void deleteUserLA (Long id);
    public UserLA updateUserLA(UserLA userLA);
}
