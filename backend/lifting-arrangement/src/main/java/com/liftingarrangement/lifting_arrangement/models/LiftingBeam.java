package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class LiftingBeam {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;
    private Float maxCapacity;
    private Float length;
    private Float width;

    @OneToMany(mappedBy="liftingBeam", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingBeamEyebolt> liftingBeamEyebolts;

}
