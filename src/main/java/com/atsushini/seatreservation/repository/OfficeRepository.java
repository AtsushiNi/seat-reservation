package com.atsushini.seatreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atsushini.seatreservation.entity.Office;

public interface OfficeRepository extends JpaRepository<Office, Integer> {

}
