import m from "mithril";

import { baseUrl, apikey } from "../vars.js";
import auth from "./auth.js";

var orderList = {
    url: `${baseUrl}orders`,
    currentOrders: [],
    getOrders: function () {
        m.request({
            url: `${orderList.url}?api_key=${apikey}`,
            method: "GET"
        }).then(function (result) {
            console.log(result);
            orderList.currentOrders = result.data;
        });
    },
    getOrder: function (input) {
        console.log(input);
        m.request({
            method: "GET",
            url: `${orderList.url}/${input.order_id}?api_key=${apikey}`
        }).then(function (result) {
            console.log(result);
            orderList.updateStatus(result);
        });
    },
    sendInvoice: function (input) {
        console.log(input);

        input.api_key = apikey;

        m.request({
            url: `${baseUrl}invoices`,
            body: input,
            method: "POST",
            headers: {
                'x-access-token': auth.token
            }
        }).then(function () {
            console.log("Faktura skapad!");
            orderList.getOrder(input);
            m.route.set("/invoices");
        });
    },
    updateStatus: function (info) {
        info.data.api_key = apikey;
        info.data.status_id = 600;

        m.request({
            method: "PUT",
            body: info.data,
            url: `${orderList.url}`
        }).then(function () {
            console.log("Status uppdaterad till fakturerad!");
        });
    },
    currentInv: {

    },
    load: function (inputid) {
        console.log(inputid);
        m.request({
            method: "GET",
            url: `${baseUrl}invoices/${inputid}?api_key=${apikey}`,
            headers: {
                'x-access-token': auth.token
            }
        }).then(function (result) {
            orderList.currentInv = result.data;
        });
    },
    currentOrder: {

    }
};


export default orderList;
