package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class LiftingArrangement {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_headerLA")
    private Header header;

    @ManyToOne
    @JoinColumn(name = "id_liftingBeam")
    private Beam beam;

    @ManyToOne
    @JoinColumn(name = "id_liftingBeamEyebolt")
    private Eyebolt eyebolt;

    @ManyToOne
    @JoinColumn(name = "id_liftingShackle")
    private Shackle shackle;

    @ManyToOne
    @JoinColumn(name = "id_webbingSling")
    private WebbingSling webbingSling;

    @ManyToOne
    @JoinColumn(name = "id_chainSling")
    private Chain chain;

    @ManyToOne
    @JoinColumn(name = "id_wireSling")
    private WireSling wireSling;

    @ManyToOne
    @JoinColumn(name = "id_connectingLink")
    private ConnectingLink connectingLink;

    @ManyToOne
    @JoinColumn(name = "id_liftingHook")
    private Hook hook;

    @ManyToOne
    @JoinColumn(name = "id_liftingRing")
    private Ring ring;

    private Integer rootRow;
    private Integer rootColumn;
    private Integer rootPlane;
    private Float angle;
    private String status;

    /*@OneToMany(mappedBy = "liftingArrangement", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Revision> revisions;*/
}
