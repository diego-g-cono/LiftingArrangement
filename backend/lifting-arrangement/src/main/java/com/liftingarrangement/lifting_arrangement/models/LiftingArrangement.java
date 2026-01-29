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
    @JoinColumn(name = "header_id")
    private Header header;

    @ManyToOne
    @JoinColumn(name = "beam_id")
    private Beam beam;

    @ManyToOne
    @JoinColumn(name = "eyebolt_id")
    private Eyebolt eyebolt;

    @ManyToOne
    @JoinColumn(name = "shackle_id")
    private Shackle shackle;

    @ManyToOne
    @JoinColumn(name = "webbing_sling_id")
    private WebbingSling webbing_sling;

    @ManyToOne
    @JoinColumn(name = "chain_id")
    private Chain chain;

    @ManyToOne
    @JoinColumn(name = "wire_sling_id")
    private WireSling wire_sling;

    @ManyToOne
    @JoinColumn(name = "connecting_link_id")
    private ConnectingLink connecting_link;

    @ManyToOne
    @JoinColumn(name = "hook_id")
    private Hook hook;

    @ManyToOne
    @JoinColumn(name = "ring_id")
    private Ring ring;

    @ManyToOne
    @JoinColumn(name = "crane_hook_id")
    private CraneHook crane_hook;

    private Float angle;
    private String status;
    private Float load;

    /*@OneToMany(mappedBy = "liftingArrangement", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Revision> revisions;*/
}
