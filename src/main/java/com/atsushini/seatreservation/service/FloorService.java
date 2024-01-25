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

    public FloorDto findFloorById(Integer floorId) {
        Floor floor = floorRepository.findById(floorId).orElseThrow();
        return convertToDto(floor);
    }

    public List<FloorDto> findFloorsByOfficeId(Integer officeId) {
        List<Floor> floors = floorRepository.findByOfficeId(officeId);
        return floors.stream().map(this::convertToDto).collect(Collectors.toList());
    }

    private FloorDto convertToDto(Floor floor) {
        FloorDto floorDto = new FloorDto();
        floorDto.setId(floor.getId());
        floorDto.setName(floor.getName());
        floorDto.setMapImage(floor.getMapImage());
        return floorDto;
    }
}
