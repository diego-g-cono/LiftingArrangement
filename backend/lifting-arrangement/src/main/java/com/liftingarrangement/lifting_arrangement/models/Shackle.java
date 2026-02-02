package com.liftingarrangement.lifting_arrangement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "shackles")
public class Shackle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    private Float working_load;
    private Float weight;
    private String code;
    private Integer e;
    private Integer b;
    private Integer b1;
    private Integer a;
    private Integer d2;
    private Integer c;

    @JsonIgnore
    @OneToMany(mappedBy="shackle", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
