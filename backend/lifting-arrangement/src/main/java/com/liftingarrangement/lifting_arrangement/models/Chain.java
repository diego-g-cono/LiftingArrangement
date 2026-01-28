package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Chain {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    private Float working_load;
    private Float length;
    private String code;
    private Integer nominal_diameter_dn;
    private Integer standard_delivery_length;
    private Integer pitch_t;
    private Float inside_width_b1;
    private Float outside_width_b2;
    private Float breaking_force;
    private Float weight;

    @OneToMany(mappedBy="chain", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
