package com.atsushini.seatreservation.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "offices")
public class Office {
    @Id
    private Integer id;

    private String name;

    @OneToMany(mappedBy = "office")
    private List<Floor> floors;
}
