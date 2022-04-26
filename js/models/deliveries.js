import m from "mithril";

import products from "./products";
import { baseUrl, apikey } from "../vars.js";

var deliveries = {
    url: baseUrl + "deliveries",
    currentDeliveries: [],
    getDeliveries: function () {
        m.request({
            url: `${deliveries.url}?api_key=${apikey}`,
            method: "GET"
        }).then(function (result) {
            console.log(result);
            deliveries.currentDeliveries = result.data;
        });
    },
    save: function () {
        deliveries.currentDelivery.api_key = apikey;
        console.log(deliveries.currentDelivery);
        return m.request({
            method: "POST",
            url: baseUrl + "deliveries",
            body: deliveries.currentDelivery
        }).then(function () {
            products.getProduct(deliveries.currentDelivery);
            //m.route.set("/");
        });
    },
    currentDelivery: {

    }
};

export default deliveries;
