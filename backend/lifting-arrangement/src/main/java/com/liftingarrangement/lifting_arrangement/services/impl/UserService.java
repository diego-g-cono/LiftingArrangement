package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.User;
import com.liftingarrangement.lifting_arrangement.repositories.UserRepository;
import com.liftingarrangement.lifting_arrangement.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class UserService implements IUserService {
    @Autowired
    private UserRepository repository;

    public User getUserLA(Long id) {
        return repository.findById(id).get();
    }

    public List<User> getUsersLA(){
        return repository.findAll();
    }

    public User createUserLA(User user){
        return repository.save(user);
    }

    public void deleteUserLA (Long id){
        repository.deleteById(id);
    }

    public User updateUserLA (User user){
        return repository.save(user);
    }

}
