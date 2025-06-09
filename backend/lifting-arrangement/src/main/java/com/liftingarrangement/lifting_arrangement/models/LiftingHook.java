package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class LiftingHook {
    @Id
    @GeneratedValue
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_brand")
    private Brand brand;

    private Float capacity;
}
