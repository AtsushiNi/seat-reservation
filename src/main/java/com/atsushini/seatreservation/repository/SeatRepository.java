package com.atsushini.seatreservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atsushini.seatreservation.entity.Floor;
import com.atsushini.seatreservation.entity.Seat;

public interface SeatRepository extends JpaRepository<Seat, Integer> {
    
    public List<Seat> findByFloor(Floor floor);
}
