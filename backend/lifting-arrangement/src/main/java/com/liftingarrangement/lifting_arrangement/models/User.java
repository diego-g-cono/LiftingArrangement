package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String password;
    private String email;

    @OneToMany(mappedBy="userLA", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Header>headers;

    @OneToMany(mappedBy="controller", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Revision>revisions;

}
