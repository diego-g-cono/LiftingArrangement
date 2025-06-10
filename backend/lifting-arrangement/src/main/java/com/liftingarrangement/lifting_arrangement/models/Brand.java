package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingShackle> liftingShackles;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WebbingSling> webbingSlings;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ChainSling> chainSlings;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WireSling> wireSlings;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ConnectingLink> connectingLinks;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingHook> liftingHooks;
}
