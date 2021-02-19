package com.manita.testing.controller;

import com.manita.testing.service.GatewayService;
import com.mercadopago.exceptions.MPException;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("api")
public class GatewayController {
    private final GatewayService gatewayService;

    @PostMapping("gateways")
    public String generarPreferencia() throws MPException {
        return gatewayService.generarPreferencia();
    }

    @PostMapping("/notifications")
    public ResponseEntity paymentNotifications(
            @RequestParam(required = false) Long id,
            @RequestParam(name = "data.id", required = false) Long dataId,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String topic,
            @RequestBody Map<String, Object> requestBody) {
        if(id != null && topic != null){
            // Instant Payment Notification
            System.out.println("=========== RECEIVED IPN ===========");
            System.out.println("Id: " + id);
            System.out.println("Topic: " + topic);
            System.out.println(requestBody);
            System.out.println("====================================");
        } else if (dataId != null && type != null){
            // WebHook Notification
            System.out.println("=========== NEW WEB HOOK ===========");
            System.out.println("Data Id: " + dataId);
            System.out.println("Topic: " + type);
            System.out.println(requestBody);
            System.out.println("====================================");
        }else{
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(200);
    }
}
