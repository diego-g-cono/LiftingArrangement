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
    private User user;

    private String date;
    private String product;
    private Integer quantity;
    private Integer lifting_points;
    private Float max_load;
    private Float unit_load;
    private String operation;
    private String liftingBeamName;
    private Float liftingBeamCapacity;

    /*@OneToMany(mappedBy="header", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> liftingArrangements;*/

    @OneToOne(mappedBy="header", cascade=CascadeType.ALL, orphanRemoval = true)
    private Revision revision;
}
