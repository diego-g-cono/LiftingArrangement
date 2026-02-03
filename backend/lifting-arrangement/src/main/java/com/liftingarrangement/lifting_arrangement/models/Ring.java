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
@Table(name = "rings")
public class Ring {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    private Float working_load;
    private String code;
    private Integer d;
    private Integer t;
    private Integer w;
    private Integer s;
    private Float weight;

    @JsonIgnore
    @OneToMany(mappedBy="ring", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
