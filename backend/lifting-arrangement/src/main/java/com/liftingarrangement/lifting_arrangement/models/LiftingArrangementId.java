package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.Embeddable;

import lombok.Data;

import java.io.Serializable;

@Data
@Embeddable
public class LiftingArrangementId implements Serializable {

    private Long headerId;
    private Integer rowLA;
    private Integer columnLA;
    private Integer planeLA;
}
