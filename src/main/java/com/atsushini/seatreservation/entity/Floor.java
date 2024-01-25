package com.atsushini.seatreservation.entities;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "floors")
public class Floor {
    @Id
    private Integer id;

    private String name;

    @ManyToOne
    private Office office;

    @OneToMany(mappedBy = "floor")
    private Set<Seat> seats;
}
