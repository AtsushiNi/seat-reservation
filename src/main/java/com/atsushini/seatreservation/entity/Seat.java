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
@Table(name = "seats")
public class Seat {
   @Id
    private Integer id;
    
    // floorMapImage上の位置
    // 左下の位置
    private Integer startLat;
    private Integer startLng;
    // 右上の位置
    private Integer endLat;
    private Integer endLng;

    @ManyToOne
    private Floor floor;

    @OneToMany(mappedBy = "seat")
    private List<Reservation> reservations;

    public Seat(Integer id) {
        this.id = id;
    }
}
