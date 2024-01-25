package com.atsushini.seatreservation.dto;

import java.util.List;

import lombok.Data;

@Data
public class FloorDto {
    
    private Integer id;
    private String name;
    private String mapImage;

    private List<SeatDto> seats;
}
