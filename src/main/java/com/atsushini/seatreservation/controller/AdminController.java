package com.atsushini.seatreservation.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atsushini.seatreservation.dto.SeatDto;
import com.atsushini.seatreservation.service.SeatService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    
    private final SeatService seatService;

    @PostMapping("/floor/{id}/add-seats")
    public void addSeats(@PathVariable("id") Integer floorId, @RequestBody List<SeatDto> seats) {
        seatService.createSeats(seats, floorId);
    }
}
