package com.atsushini.seatreservation.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;

@Entity
@Getter
@Table(name = "reservations")
public class Reservation {
    @Id
    private Integer id;
    
    private Date date;

    @ManyToOne
    private User user;

    @ManyToOne
    private Seat seat;
}
