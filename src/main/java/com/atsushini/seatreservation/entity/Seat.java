package com.atsushini.seatreservation.entities;

import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "seats")
public class Seat {
   @Id
    private Integer id;
    
    private Integer positionLat;
    private Integer positionLng;

    @ManyToOne
    private Floor floor;

    @OneToMany(mappedBy = "seat")
    private Set<Reservation> reservations;
}
