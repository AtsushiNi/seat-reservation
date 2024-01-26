package com.atsushini.seatreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.atsushini.seatreservation.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    
}
