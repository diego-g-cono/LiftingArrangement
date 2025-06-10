package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Header {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name="id_user")
    private UserLA userLA;

    private String date;
    private String product;
    private Integer quantity;
    private Integer liftingPoints;
    private Float maxLoad;
    private Float unitLoad;
    private String operation;
    private String liftingBeamName;
    private Float liftingBeamCapacity;

    /*@OneToMany(mappedBy="header", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> liftingArrangements;*/
}
