package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class LiftingBeamEyebolt {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name="id_liftingBeam")
    private LiftingBeam liftingBeam;

    private String name;
    private Float capacity;
    private Float diameter;
    private String ubication;
    private Float centerDistance;
    private Float depth;

    @OneToMany(mappedBy="liftingBeamEyebolt", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> liftingArrangements;
}
