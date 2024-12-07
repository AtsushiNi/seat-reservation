package com.atsushini.seatreservation.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.dto.SeatDto;
import com.atsushini.seatreservation.entity.Floor;
import com.atsushini.seatreservation.entity.Seat;
import com.atsushini.seatreservation.repository.SeatRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SeatService {

    private final SeatRepository seatRepository;

    public List<SeatDto> findByFloor(Floor floor) {
        List<Seat> seats = seatRepository.findByFloor(floor);
        return seats.stream().map(seat -> {
            List<Map<String, Integer>> bounds = List.of(
                    Map.of("lat", seat.getStartLat(), "lng", seat.getStartLng()),
                    Map.of("lat", seat.getEndLat(), "lng", seat.getEndLng()));
            SeatDto seatDto = SeatDto.builder()
                    .id(seat.getId())
                    .bounds(bounds)
                    .build();
            return seatDto;
        }).toList();
    }
}
