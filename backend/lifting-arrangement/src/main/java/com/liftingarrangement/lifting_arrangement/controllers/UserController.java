package com.liftingarrangement.lifting_arrangement.controllers;

import com.liftingarrangement.lifting_arrangement.models.UserLA;
import com.liftingarrangement.lifting_arrangement.services.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private IUserService service;

    @GetMapping
    public List<UserLA> getUsersLA(){return service.getUsersLA();}

    @GetMapping("{id}")
    public UserLA getUserLA(@PathVariable("id")Long id){
        return service.getUserLA(id);
    }

    @PostMapping
    public UserLA createUserLA(@RequestBody UserLA userLA){
        return service.createUserLA(userLA);
    }

    @DeleteMapping("{id}")
    public void deleteUserLA(@PathVariable("id") Long id){
        service.deleteUserLA(id);
    }

    @PutMapping()
    public UserLA updateUserLA(@RequestBody UserLA userLA){
        return service.updateUserLA(userLA);
    }
}
