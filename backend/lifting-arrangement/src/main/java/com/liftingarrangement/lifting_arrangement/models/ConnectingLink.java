package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "connecting_link")
public class ConnectingLink {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    private Float working_load;
    private String code;
    private Integer e;
    private Integer c;
    private Integer s;
    private Integer t;
    private Integer d;
    private Integer b;
    private Integer g;
    private Float weight;

    @OneToMany(mappedBy="connecting_link", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
