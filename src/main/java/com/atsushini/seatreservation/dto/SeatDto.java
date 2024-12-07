package com.atsushini.seatreservation.dto;

import java.util.List;
import java.util.Map;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SeatDto {

    private Integer id;
    private String name;

    // 座席を表現する長方形の頂点
    // 例: [{lat: 10, lng: 10}, [lat: 50, lng: 50]]
    // 例: [右上の頂点座標, 左下の頂点座標]
    private List<Map<String, Integer>> bounds;
}
