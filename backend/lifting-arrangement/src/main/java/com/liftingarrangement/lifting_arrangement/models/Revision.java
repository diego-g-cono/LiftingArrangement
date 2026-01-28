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

    /*@ManyToOne
    @JoinColumns({
            @JoinColumn(name = "rowLA", referencedColumnName = "rowLA"),
            @JoinColumn(name = "columnLA", referencedColumnName = "columnLA"),
            @JoinColumn(name = "planeLA", referencedColumnName = "planeLA"),
            @JoinColumn(name = "id_headerLA", referencedColumnName = "id_headerLA")
    })
    private LiftingArrangement liftingArrangement;*/

    @OneToOne
    @JoinColumn(name="id_headerLA")
    private Header header;
}
