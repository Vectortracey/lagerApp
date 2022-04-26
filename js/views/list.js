import m from "mithril";
import deliveries from "../models/deliveries.js";

var list = {
    oninit: deliveries.getDeliveries,
    view: function () {
        return m("main.container", [
            m("h1", "Inleveranser"),
            m("a.button.blue-button", { href: "#/form", oncreate: m.route.link }, "Ny inleverans"),
            m("div.deliveries", deliveries.currentDeliveries.map(function (delivery) {
                return ("div.inleverans", [
                    m("dt", "Produkt: " + delivery.product_name),
                    m("dt", "Antal: " + delivery.amount),
                    m("dt", "Datum: " + delivery.delivery_date),
                    m("dt", "Kommentar: " + delivery.comment),
                    m("br")
                ]);
            })),
            deliveries.currentDeliveries.length > 0 ?
                m("div") :
                m("p.no-del", "Inga leveranser gjorda.")
        ]);
    }
};

export default list;
