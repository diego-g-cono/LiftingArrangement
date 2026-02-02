package com.liftingarrangement.lifting_arrangement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "eyebolts")
public class Eyebolt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="beam_id")
    private Beam beam;

    private String name;
    private Float working_load;
    private Float diameter;
    private String location;
    private Float distance_center;
    private Float depth;

    @JsonIgnore
    @OneToMany(mappedBy="eyebolt", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
