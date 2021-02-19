package com.manita.testing.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebControler {

    @GetMapping(    {"/",
                    "/order"
    })
    public String index(){ return "index"; }
}
