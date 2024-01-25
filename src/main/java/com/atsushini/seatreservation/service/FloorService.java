package com.atsushini.seatreservation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.entity.Floor;
import com.atsushini.seatreservation.entity.Office;
import com.atsushini.seatreservation.repository.FloorRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FloorService {
    
    private final FloorRepository floorRepository;

    public List<Floor> findFloorsByOffice(Office office) {
        return floorRepository.findByOffice(office);
    }

}
