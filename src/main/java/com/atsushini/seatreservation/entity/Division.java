package com.atsushini.seatreservation.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "divisions")
public class Division {
    @Id
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "division")
    private List<User> users;
}
