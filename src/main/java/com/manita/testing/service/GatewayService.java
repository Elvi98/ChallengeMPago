package com.manita.testing.service;

import com.mercadopago.exceptions.MPException;
import com.mercadopago.resources.Preference;
import com.mercadopago.resources.datastructures.preference.*;
import org.springframework.stereotype.Service;
import com.mercadopago.MercadoPago;

@Service
public class GatewayService {
    public String generarPreferencia() throws MPException {
        MercadoPago.SDK.setAccessToken("APP_USR-8208253118659647-112521-dd670f3fd6aa9147df51117701a2082e-677408439");
        MercadoPago.SDK.setIntegratorId("dev_2e4ad5dd362f11eb809d0242ac130004");

        // Crea un objeto de preferencia
        Preference preference = new Preference();

        // Crea un ítem en la preferencia
        Item item = new Item();

        PaymentMethods paymentMethods = new PaymentMethods();
        item.setTitle("Pringles")
                .setDescription("Papitas sabor a pizza.")
                .setPictureUrl("https://www.google.com/imgres?imgurl=http%3A%2F%2Fimages.kglobalservices.com%2Fwww.pringles.com_es%2Fes_es%2Fproduct%2Fproduct_8491992%2Fprod_img-8510902_pizza-165-gr.png&imgrefurl=https%3A%2F%2Fwww.pringles.com%2Fes%2Fproducts%2FSabores%2Fpringles-pizza-165g.html&tbnid=X0tzmaB54Vhs8M&vet=12ahUKEwiM-obhmPLuAhUpBLkGHUg3DqQQMygBegUIARDIAQ..i&docid=7YKxB9SSB5WOgM&w=300&h=819&q=pringles%20pizza&ved=2ahUKEwiM-obhmPLuAhUpBLkGHUg3DqQQMygBegUIARDIAQ")
                .setId("1234")
                .setQuantity(1)
                .setUnitPrice((float) 19.00);

        preference.appendItem(item);

        // Crea un payer en la preferencia

        Payer payer = new Payer();

        payer.setName("Lalo Landa")
                .setIdentification(new Identification().setType("DNI").setNumber("22334445"))
                .setEmail("test_user_46542185@testuser.com")
                .setPhone(new Phone().setAreaCode("52").setNumber("5549737300"))
                .setAddress(new Address().setStreetName("Insurgente Sur").setStreetNumber(1602).setZipCode("03940"));

        preference.setPayer(payer);

        // Crea payment methods en la preferencia

        paymentMethods.setInstallments(6)
                        .setExcludedPaymentMethods("diners")
                        .setExcludedPaymentTypes("atm");

        preference.setPaymentMethods(paymentMethods);

        // Crea back urls en la preferencia
        BackUrls backUrls = new BackUrls();
        backUrls.setFailure("https://elvita.herokuapp.com/order")
                .setPending("https://elvita.herokuapp.com/order")
                .setSuccess("https://elvita.herokuapp.com/order");

        preference.setNotificationUrl("https://elvita.herokuapp.com/api/notifications")

        preference.setExternalReference("elvia.arteaga98@gmail.com");
        return preference.save().getInitPoint();
    }
}
