package com.atsushini.seatreservation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.entity.Office;
import com.atsushini.seatreservation.repository.OfficeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OfficeService {

    private final OfficeRepository officeRepository;

    public List<Office> findAll() {
        return officeRepository.findAll();
    }
}
