package com.liftingarrangement.lifting_arrangement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "users")
public class UserLA {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private String password;
    private String email;

    @JsonIgnore
    @OneToMany(mappedBy="user_la", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Header>headers;

}
