package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.UserLA;
import com.liftingarrangement.lifting_arrangement.repositories.UserRepository;
import com.liftingarrangement.lifting_arrangement.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class UserService implements IUserService {
    @Autowired
    private UserRepository repository;

    public UserLA getUserLA(Long id) {
        return repository.findById(id).get();
    }

    public List<UserLA> getUsersLA(){
        return repository.findAll();
    }

    public UserLA createUserLA(UserLA userLA){
        return repository.save(userLA);
    }

    public void deleteUserLA (Long id){
        repository.deleteById(id);
    }

    public UserLA updateUserLA (UserLA userLA){
        return repository.save(userLA);
    }

}
