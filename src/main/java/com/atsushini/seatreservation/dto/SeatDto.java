package com.atsushini.seatreservation.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
public class SeatDto {

    private Integer id;
    private Bounds bounds;

    @AllArgsConstructor
    @Data
	public static class Bounds {
        private List<Integer> start;
        private List<Integer> end;
    }
    
}
