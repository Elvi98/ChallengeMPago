package com.manita.testing.controller;

import com.manita.testing.service.GatewayService;
import com.mercadopago.exceptions.MPException;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("api")
public class GatewayController {
    private final GatewayService gatewayService;

    @PostMapping("gateways")
    public String generarPreferencia() throws MPException {
        return gatewayService.generarPreferencia();
    }
}
