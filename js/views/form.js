import m from "mithril";

import deliveries from "../models/deliveries.js";
import products from "../models/products.js";

var form = {
    oninit: products.getProducts,
    view: function () {
        return m("main.container", [
            m("h1", "Ny Inleverans"),
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    deliveries.save();
                }
            }, [
                m("label.input-label", "Produktval"),
                m("select.input", {
                    onchange: function (event) {
                        deliveries.currentDelivery.product_id = event.target.value;
                        products.currentProducts.id = parseInt(event.target.value);
                    }
                }, m("option", "Välj produkt"),
                products.currentProducts.map(function (product) {
                    return m("option", { value: product.id }, product.name);
                })),
                m("label.input-label", "Antal"),
                m("input[type=number].input", {
                    oninput: function (event) {
                        console.log(event.target.value);
                        deliveries.currentDelivery.amount = parseInt(event.target.value);
                    }
                }),
                m("label.input-label", "Lev Datum"),
                m("input[type=date].input", {
                    oninput: function (event) {
                        console.log(event.target.value);
                        deliveries.currentDelivery.delivery_date = event.target.value;
                    }
                }),
                m("label.input-label", "Kommentar"),
                m("textarea.comment[rows=4][cols=33][placeholder=Skriv en kommentar].input", {
                    oninput: function (event) {
                        console.log(event.target.value);
                        deliveries.currentDelivery.comment = event.target.value;
                    }
                }),
                m("input[type=submit][value=spara].button.green-button", "Spara")
            ])
        ]);
    }
};

export default form;

//in med select formulär
