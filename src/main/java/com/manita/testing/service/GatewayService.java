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
        item.setTitle("Huawei P30 Lite")
                .setDescription("Dispositivo móvil de tienda e-commerce")
                .setPictureUrl("https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p30-lite-new-adition/images/kv-phones-mob.png")
                .setId("1234")
                .setQuantity(1)
                .setUnitPrice((float) 499.00);

        preference.appendItem(item);

        // Crea un payer en la preferencia

        Payer payer = new Payer();

        payer.setName("Lalo").setSurname("Landa")
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

        preference.setBackUrls(backUrls);

        preference.setAutoReturn(Preference.AutoReturn.approved);

        preference.setNotificationUrl("https://elvita.herokuapp.com/api/notifications");

        preference.setExternalReference("elvia.arteaga98@hotmail.com");
        return preference.save().getInitPoint();
    }
}
