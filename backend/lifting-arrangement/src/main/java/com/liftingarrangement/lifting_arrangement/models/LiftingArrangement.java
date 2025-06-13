package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class LiftingArrangement {

    @EmbeddedId
    private LiftingArrangementId id;

    @MapsId("headerId")
    @ManyToOne
    @JoinColumn(name = "id_headerLA")
    private Header header;

    @ManyToOne
    @JoinColumn(name = "id_liftingBeam")
    private LiftingBeam liftingBeam;

    @ManyToOne
    @JoinColumn(name = "id_liftingBeamEyebolt")
    private LiftingBeamEyebolt liftingBeamEyebolt;

    @ManyToOne
    @JoinColumn(name = "id_liftingShackle")
    private LiftingShackle liftingShackle;

    @ManyToOne
    @JoinColumn(name = "id_webbingSling")
    private WebbingSling webbingSling;

    @ManyToOne
    @JoinColumn(name = "id_chainSling")
    private ChainSling chainSling;

    @ManyToOne
    @JoinColumn(name = "id_wireSling")
    private WireSling wireSling;

    @ManyToOne
    @JoinColumn(name = "id_connectingLink")
    private ConnectingLink connectingLink;

    @ManyToOne
    @JoinColumn(name = "id_liftingHook")
    private LiftingHook liftingHook;

    @ManyToOne
    @JoinColumn(name = "id_liftingRing")
    private LiftingRing liftingRing;

    private Integer rootRow;
    private Integer rootColumn;
    private Integer rootPlane;
    private Float angle;
    private String status;

    @OneToMany(mappedBy = "liftingArrangement", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Revision> revisions;
}
