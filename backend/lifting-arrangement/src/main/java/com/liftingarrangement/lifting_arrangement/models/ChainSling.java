package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class ChainSling {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_brand")
    private Brand brand;

    private Float capacity;
    private Float length;

    @OneToMany(mappedBy="chainSling", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> liftingArrangements;
}
