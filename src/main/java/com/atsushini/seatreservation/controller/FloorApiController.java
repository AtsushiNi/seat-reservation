package com.atsushini.seatreservation.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atsushini.seatreservation.dto.FloorDto;
import com.atsushini.seatreservation.form.FloorForm;
import com.atsushini.seatreservation.service.FloorService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/floors")
@RequiredArgsConstructor
public class FloorApiController {
    
    private final FloorService floorService;

    @GetMapping("/{id}")
    public FloorForm getFloor(@PathVariable("id") Integer floorId) {
        FloorDto floor = floorService.findFloorById(floorId);
        FloorForm floorForm = new FloorForm();
        floorForm.setId(floor.getId());
        floorForm.setName(floor.getName());
        floorForm.setMapImageUrl("uploads/floorMapImages/" + floor.getMapImage());
        floorForm.setSeats(floor.getSeats());

        return floorForm;
    }
}
