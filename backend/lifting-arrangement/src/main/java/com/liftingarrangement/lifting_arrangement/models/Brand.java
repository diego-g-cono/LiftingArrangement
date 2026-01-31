package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "brands")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Shackle> shackles;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WebbingSling> webbing_slings;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Chain> chains;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WireSling> wire_slings;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ConnectingLink> connecting_links;

    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Hook> hooks;
}
