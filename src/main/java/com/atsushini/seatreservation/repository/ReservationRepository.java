package com.atsushini.seatreservation.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atsushini.seatreservation.entity.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

    public List<Reservation> findByDateAndSeat_Floor_Id(LocalDate date, Integer floorId);
    
}
