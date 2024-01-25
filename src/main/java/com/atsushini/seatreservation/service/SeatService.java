package com.atsushini.seatreservation.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
            SeatDto seatDto = new SeatDto();
            seatDto.setId(seat.getId());
            seatDto.setBounds(
                    new SeatDto.Bounds(
                            Arrays.asList(seat.getStartLat(), seat.getStartLng()),
                            Arrays.asList(seat.getEndLat(), seat.getEndLng())));
            return seatDto;
        }).collect(Collectors.toList());
    }

}
