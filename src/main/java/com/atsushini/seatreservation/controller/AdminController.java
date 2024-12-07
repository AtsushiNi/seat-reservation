package com.atsushini.seatreservation.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {
    
    @PostMapping("/floor/{id}/add-seats")
    public void addSeats(@PathVariable("id") Integer floorId, @RequestBody List<SeatRequest> seats) {
        System.out.println(floorId);
        seats.stream().forEach(seat -> {
            seat.getBounds().stream().forEach(System.out::println);
            System.out.println(seat.getName());
        });
    }

    @Data
    static class SeatRequest {
        private List<Map<String, Integer>> bounds;
        private String name;
    }
}
