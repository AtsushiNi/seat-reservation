package com.atsushini.seatreservation.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    private Integer id;
    
    @ManyToOne
    private User user;

    @ManyToOne
    private Seat seat;
}
