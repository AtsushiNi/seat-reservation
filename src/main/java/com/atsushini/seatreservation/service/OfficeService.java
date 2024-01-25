package com.atsushini.seatreservation.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.dto.OfficeDto;
import com.atsushini.seatreservation.entity.Office;
import com.atsushini.seatreservation.repository.OfficeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OfficeService {

    private final OfficeRepository officeRepository;

    public List<OfficeDto> findAll() {
        List<Office> offices = officeRepository.findAll();
        return offices.stream().map(office -> {
            OfficeDto officeDto = new OfficeDto();
            officeDto.setId(office.getId());
            officeDto.setName(office.getName());
            return officeDto;
        }).collect(Collectors.toList());
    }
}
