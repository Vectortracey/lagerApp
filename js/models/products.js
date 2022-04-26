import m from "mithril";

import { baseUrl, apikey } from "../vars.js";

var products = {
    url: baseUrl + "products",
    currentProducts: [],
    getProducts: function () {
        m.request({
            url: `${products.url}?api_key=${apikey}`,
            method: "GET"
        }).then(function (result) {
            console.log(result);
            products.currentProducts = result.data;
        });
    },
    getProduct: function (inp) {
        var prodID = inp.product_id;

        var amount = inp.amount;

        m.request({
            method: "GET",
            url: `${products.url}/${prodID}?api_key=${apikey}`
        }).then(function (result) {
            console.log(result);
            products.updateAmount(result, amount);
        });
    },
    updateAmount: function (product, amount) {
        var prod = product;

        var amo = amount;

        prod.data.stock += parseInt(amo);
        prod.data.api_key = apikey;

        m.request({
            method: "PUT",
            url: `${products.url}`,
            body: prod.data
        }).then(function () {
            console.log("Levererad!!");
            m.route.set("/");
        });
    }
};

export default products;
