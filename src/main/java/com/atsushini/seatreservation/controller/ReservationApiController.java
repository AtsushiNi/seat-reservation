package com.atsushini.seatreservation.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.atsushini.seatreservation.dto.ReservationDto;
import com.atsushini.seatreservation.service.ReservationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ReservationApiController {

    private final ReservationService reservationService;
    
    // 日付とフロアidから、予約情報を取得する
    @GetMapping("/api/reservations")
    public List<ReservationDto> getReservations(@RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date, @RequestParam Integer floorId) {
        return reservationService.findReservationsByDateAndFloorId(date, floorId);
    }
}
