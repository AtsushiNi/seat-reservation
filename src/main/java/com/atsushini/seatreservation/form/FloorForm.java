package com.atsushini.seatreservation.form;

import java.util.List;

import com.atsushini.seatreservation.dto.SeatDto;

import lombok.Data;

@Data
public class FloorForm {
    private Integer id;
    private String name;
    private String mapImageUrl;

    private List<SeatDto> seats;
}
