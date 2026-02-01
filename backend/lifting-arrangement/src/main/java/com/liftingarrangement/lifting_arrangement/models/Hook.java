package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "hooks")
public class Hook {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    private Float working_load;
    private String code;
    private Integer e;
    private Integer h;
    private Integer a;
    private Integer b;
    private Integer d1;
    private Integer d2;
    private Integer g;
    private Float s_max;
    private Float weight;

    @OneToMany(mappedBy="hook", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;

}
