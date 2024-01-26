package com.atsushini.seatreservation.dto;

import java.util.Date;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ReservationDto {
    private Integer id;
    private Date date;

    private SeatDto seat;
    private UserDto user;

}
