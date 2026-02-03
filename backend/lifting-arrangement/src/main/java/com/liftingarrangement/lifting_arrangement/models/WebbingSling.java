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
@Table(name = "webbing_slings")
public class WebbingSling {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brand brand;

    private Float working_load;
    private Float length;

    @JsonIgnore
    @OneToMany(mappedBy="webbing_sling", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LiftingArrangement> lifting_arrangements;
}
