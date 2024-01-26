package com.atsushini.seatreservation.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.dto.ReservationDto;
import com.atsushini.seatreservation.dto.SeatDto;
import com.atsushini.seatreservation.dto.UserDto;
import com.atsushini.seatreservation.entity.Reservation;
import com.atsushini.seatreservation.repository.ReservationRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReservationService {

    private final ReservationRepository reservationRepository;

    // 日付とフロアidから、予約情報を取得する
    public List<ReservationDto> findReservationsByDateAndFloorId(LocalDate date, Integer floorId) {
        List<Reservation> reservations = reservationRepository.findByDateAndSeat_Floor_Id(date, floorId);
        return reservations.stream()
                .map(ReservationService::convertToDto)
                .toList();
    }

    private static ReservationDto convertToDto(Reservation reservation) {
        UserDto userDto = UserDto.builder()
                .id(reservation.getUser().getId())
                .name(reservation.getUser().getName())
                .build();
        SeatDto seatDto = SeatDto.builder()
                .id(reservation.getSeat().getId())
                .build();
        return ReservationDto.builder()
                .id(reservation.getId())
                .date(reservation.getDate())
                .user(userDto)
                .seat(seatDto)
                .build();
    }
}
