package com.liftingarrangement.lifting_arrangement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "beams")
public class Beam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
