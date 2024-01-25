package com.atsushini.seatreservation.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.atsushini.seatreservation.dto.FloorDto;
import com.atsushini.seatreservation.dto.OfficeDto;
import com.atsushini.seatreservation.service.FloorService;
import com.atsushini.seatreservation.service.OfficeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/offices")
@RequiredArgsConstructor
public class OfficeApiController {

    private final OfficeService officeService;
    private final FloorService floorService;

    @GetMapping
    public List<OfficeDto> getOffices() {
        List<OfficeDto> offices = officeService.findAll();
        return offices;
    }

    @GetMapping("{id}/floors")
    public List<FloorDto> getFloors(@PathVariable Integer id) {
        List<FloorDto> floors = floorService.findFloorsByOfficeId(id);
        return floors;
    }
}
