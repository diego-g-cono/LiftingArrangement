package com.liftingarrangement.lifting_arrangement.models;

import jakarta.persistence.Embeddable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Embeddable
public class LiftingArrangementId {
    @ManyToOne
    @JoinColumn(name = "id_headerLA")
    private Header header;

    private Integer row;
    private Integer column;
    private Integer plane;
}
