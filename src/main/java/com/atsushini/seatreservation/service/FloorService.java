package com.atsushini.seatreservation.service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.dto.FloorDto;
import com.atsushini.seatreservation.dto.SeatDto;
import com.atsushini.seatreservation.entity.Floor;
import com.atsushini.seatreservation.entity.Seat;
import com.atsushini.seatreservation.repository.FloorRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FloorService {

    private final FloorRepository floorRepository;

    public FloorDto findFloorById(Integer floorId) {
        Floor floor = floorRepository.findById(floorId).orElseThrow();
        return convertToDtoWithSeats(floor);
    }

    public List<FloorDto> findFloorsByOfficeId(Integer officeId) {
        List<Floor> floors = floorRepository.findByOfficeId(officeId);
        return floors.stream().map(floor -> convertToDto(floor)).collect(Collectors.toList());
    }

    private static FloorDto convertToDto(Floor floor) {
        FloorDto floorDto = new FloorDto();
        floorDto.setId(floor.getId());
        floorDto.setName(floor.getName());
        floorDto.setMapImage(floor.getMapImage());
        return floorDto;
    }

    private static FloorDto convertToDtoWithSeats(Floor floor) {
        FloorDto floorDto = convertToDto(floor);

        List<Seat> seats = floor.getSeats();
        floorDto.setSeats(
                seats.stream().map(seat -> {
                    SeatDto seatDto = new SeatDto();
                    seatDto.setId(seat.getId());
                    seatDto.setBounds(
                            new SeatDto.Bounds(
                                    Arrays.asList(seat.getStartLat(), seat.getStartLng()),
                                    Arrays.asList(seat.getEndLat(), seat.getEndLng())));
                    return seatDto;
                }).toList());
        return floorDto;
    }
}
