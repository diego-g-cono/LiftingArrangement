package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Eyebolt {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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

    @OneToMany(mappedBy="eyebolt", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
