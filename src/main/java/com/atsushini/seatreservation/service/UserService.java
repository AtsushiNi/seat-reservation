package com.atsushini.seatreservation.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.atsushini.seatreservation.dto.UserDto;
import com.atsushini.seatreservation.entity.User;
import com.atsushini.seatreservation.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<UserDto> findAll() {
        List<User> users = userRepository.findAll();
        return users.stream().map(user -> {
            return UserDto.builder()
                    .id(user.getId())
                    .name(user.getName())
                    .build();
        }).toList();
    }
    
}
