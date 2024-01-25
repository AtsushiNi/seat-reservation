package com.atsushini.seatreservation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ClientForwardController {

    // SPAを実現するために、任意のパスに対して/へのフォワードを行う
    // 挙動がおかしいので一旦コメントアウト。おそらくパスの指定に不備あり
    // @GetMapping("/**")
    // public String forward() {
    //     return "forward:/";
    // }
}
