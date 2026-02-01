package com.liftingarrangement.lifting_arrangement.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "brands")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Shackle> shackles;

    @JsonIgnore
    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WebbingSling> webbing_slings;

    @JsonIgnore
    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Chain> chains;

    @JsonIgnore
    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<WireSling> wire_slings;

    @JsonIgnore
    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<ConnectingLink> connecting_links;

    @JsonIgnore
    @OneToMany(mappedBy="brand", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Hook> hooks;
}
