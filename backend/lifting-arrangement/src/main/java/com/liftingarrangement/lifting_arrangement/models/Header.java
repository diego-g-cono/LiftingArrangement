package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "headers")
public class Header {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private UserLA user_la;

    private String date;
    private String product;
    private Integer quantity;
    private Integer lifting_points;
    private Float max_load;
    private Float unit_load;
    private String operation;

    @ManyToOne
    @JoinColumn(name="beam_id")
    private Beam beam;

    private Float beam_capacity;

}
