package com.liftingarrangement.lifting_arrangement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "beams")
public class Beam {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private Float max_capacity;
    private Float length;
    private Float width;
    private Float weight;

    @JsonIgnore
    @OneToMany(mappedBy="beam", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Eyebolt> eyebolts;

    @JsonIgnore
    @OneToMany(mappedBy="beam", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
