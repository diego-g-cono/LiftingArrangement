package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
public class Ring {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_brand")
    private Brand brand;

    private Float capacity;

    @OneToMany(mappedBy="liftingRing", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> liftingArrangements;
}
