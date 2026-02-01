package com.liftingarrangement.lifting_arrangement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "chains")
public class Chain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @JsonIgnore
    @OneToMany(mappedBy="chain", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
