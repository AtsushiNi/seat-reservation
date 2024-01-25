package com.atsushini.seatreservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atsushini.seatreservation.entity.Floor;

public interface FloorRepository extends JpaRepository<Floor, Integer> {
    
    public List<Floor> findByOfficeId(Integer officeId);
}
