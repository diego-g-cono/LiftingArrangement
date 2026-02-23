package com.liftingarrangement.lifting_arrangement.services.impl;

import com.liftingarrangement.lifting_arrangement.models.Header;
import com.liftingarrangement.lifting_arrangement.models.UserLA;
import com.liftingarrangement.lifting_arrangement.repositories.HeaderRepository;
import com.liftingarrangement.lifting_arrangement.repositories.UserRepository;
import com.liftingarrangement.lifting_arrangement.services.IHeaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class HeaderService implements IHeaderService {
    @Autowired
    private HeaderRepository repository;

    public Header getHeader(Long id) { return repository.findById(id).get(); }

    public List<Header> getHeaders() { return repository.findAll(); }

    @Autowired
    private UserRepository userRepository;

    public Header createHeader(Header header) {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        UserLA user = userRepository
                .findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        header.setUser_la(user);

        return repository.save(header);
    }

    public void deleteHeader(Long id) { repository.deleteById(id); }

    public Header updateHeader(Header header) { return repository.save(header); }
}
