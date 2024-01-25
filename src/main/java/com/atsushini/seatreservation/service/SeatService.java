package com.atsushini.seatreservation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.entity.Floor;
import com.atsushini.seatreservation.entity.Seat;
import com.atsushini.seatreservation.repository.SeatRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SeatService {

    private final SeatRepository seatRepository;

    public List<Seat> findByFloor(Floor floor) {
        return seatRepository.findByFloor(floor);
    }
    
}
