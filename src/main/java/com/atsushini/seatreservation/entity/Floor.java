package com.atsushini.seatreservation.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "floors")
public class Floor {
    @Id
    private Integer id;

    private String name;
    private String mapImage;

    @ManyToOne
    private Office office;

    @OneToMany(mappedBy = "floor")
    private List<Seat> seats;
}
