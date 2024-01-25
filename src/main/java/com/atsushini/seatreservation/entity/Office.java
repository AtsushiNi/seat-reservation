package com.atsushini.seatreservation.entities;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "offices")
public class Office {
    @Id
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "office")
    private Set<Floor> floors;
}
