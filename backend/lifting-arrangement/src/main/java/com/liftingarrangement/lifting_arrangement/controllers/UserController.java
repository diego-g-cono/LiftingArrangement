package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.User;
import com.liftingarrangement.lifting_arrangement.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usersLA")
public class UserController {
    @Autowired
    private IUserService service;

    @GetMapping
    public List<User> getUsersLA(){
        return service.getUsersLA();
    }

    @GetMapping("{id}")
    public User getUserLA(@PathVariable("id")Long id){
        return service.getUserLA(id);
    }

    @PostMapping
    public User createUserLA(@RequestBody User user){
        return service.createUserLA(user);
    }

    @DeleteMapping("{id}")
    public void deleteUserLA(@PathVariable("id") Long id){
        service.deleteUserLA(id);
    }

    @PutMapping()
    public User updateUserLA(@RequestBody User user){
        return service.updateUserLA(user);
    }
}
