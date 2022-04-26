import m from "mithril";

import auth from "./auth.js";
import { baseUrl, apikey } from "../vars.js";


var invoiceModel = {
    url: `${baseUrl}invoices`,
    invoices: [],

    getInvoices: function () {
        m.request({
            url: `${invoiceModel.url}?api_key=${apikey}`,
            method: "GET",
            headers: {
                'x-access-token': auth.token
            }
        }).then(function (result) {
            invoiceModel.invoices = result.data;
        });
    }
};

export default invoiceModel;
