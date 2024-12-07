package com.atsushini.seatreservation.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.dto.SeatDto;
import com.atsushini.seatreservation.entity.Floor;
import com.atsushini.seatreservation.entity.Seat;
import com.atsushini.seatreservation.repository.FloorRepository;
import com.atsushini.seatreservation.repository.SeatRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SeatService {

    private final SeatRepository seatRepository;
    private final FloorRepository floorRepository;

    public List<SeatDto> findByFloor(Floor floor) {
        List<Seat> seats = seatRepository.findByFloor(floor);
        return seats.stream().map(seat -> {
            List<Map<String, Integer>> bounds = List.of(
                    Map.of("lat", seat.getStartLat(), "lng", seat.getStartLng()),
                    Map.of("lat", seat.getEndLat(), "lng", seat.getEndLng()));
            SeatDto seatDto = SeatDto.builder()
                    .id(seat.getId())
                    .name(seat.getName())
                    .bounds(bounds)
                    .build();
            return seatDto;
        }).toList();
    }

    public void createSeats(List<SeatDto> seats, Integer floorId) {
        Optional<Floor> floorOptional = floorRepository.findById(floorId);
        Floor floor = floorOptional.orElseThrow(() -> new RuntimeException("floor not found. id: " + floorId));

        List<Seat> seatEntities = seats.stream().map(seat -> {
            Seat seatEntity = new Seat();
            seatEntity.setName(seat.getName());
            seatEntity.setStartLat(seat.getBounds().get(0).get("lat"));
            seatEntity.setStartLng(seat.getBounds().get(0).get("lng"));
            seatEntity.setEndLat(seat.getBounds().get(1).get("lat"));
            seatEntity.setEndLng(seat.getBounds().get(1).get("lng"));
            seatEntity.setFloor(floor);

            return seatEntity;
        }).toList();
        seatRepository.saveAll(seatEntities);
    }
}
