package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Revision {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String dateReception;
    private String dateFinish;
    private String status;

    @ManyToOne
    @JoinColumn(name = "id_controller")
    private User controller;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "row", referencedColumnName = "row"),
            @JoinColumn(name = "column", referencedColumnName = "column"),
            @JoinColumn(name = "plane", referencedColumnName = "plane"),
            @JoinColumn(name = "id_headerLA", referencedColumnName = "id_headerLA")
    })
    private LiftingArrangement liftingArrangement;
}
