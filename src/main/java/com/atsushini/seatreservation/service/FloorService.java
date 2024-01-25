package com.atsushini.seatreservation.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.dto.FloorDto;
import com.atsushini.seatreservation.entity.Floor;
import com.atsushini.seatreservation.repository.FloorRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FloorService {
    
    private final FloorRepository floorRepository;

    public List<FloorDto> findFloorsByOfficeId(Integer officeId) {
        List<Floor> floors = floorRepository.findByOfficeId(officeId);
        return floors.stream().map(floor -> {
            FloorDto floorDto = new FloorDto();
            floorDto.setId(floor.getId());
            floorDto.setName(floor.getName());
            return floorDto;
        }).collect(Collectors.toList());
    }

}
