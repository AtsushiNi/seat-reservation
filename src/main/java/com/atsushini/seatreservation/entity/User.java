package com.atsushini.seatreservation.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    private Integer id;

    private String name;

    @ManyToOne
    private Division division;

    @OneToMany(mappedBy = "user")
    private List<Reservation> reservations;

    public User(Integer id) {
        this.id = id;
    }
}
