import m from "mithril";

import orderList from "../models/orders.js";

var orders = {
    oninit: orderList.getOrders,
    view: function() {
        return m("main.container", [
            m("h1", "Ny Faktura"),
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    console.log(orderList.currentOrder);
                    orderList.sendInvoice(orderList.currentOrder);
                }
            }, [
                m("label.input-label", "Orders"),
                m("select.input", {
                    onchange: function(event) {
                        orderList.currentOrder.order_id = parseInt(event.target.value);
                        console.log(orderList.currentOrder.order_id);
                    }
                }, m("option", "Välj order"),
                orderList.currentOrders.map(function(order) {
                    if (order.status_id != 600) {
                        return m("option", {value: order.id}, order.name);
                    }
                })),
                m("label.input-label", "Pris"),
                m("input[type=number].input", {
                    oninput: function(event) {
                        console.log(event.target.value);
                        orderList.currentOrder.total_price = parseInt(event.target.value);
                    }
                }),
                m("label.input-label", "Skapad"),
                m("input[type=date].input", {
                    oninput: function(event) {
                        console.log(event.target.value);
                        orderList.currentOrder.creation_date = event.target.value;
                    }
                }),
                m("label.input-label", "Förfall"),
                m("input[type=date].input", {
                    oninput: function(event) {
                        console.log(event.target.value);
                        orderList.currentOrder.due_date = event.target.value;
                    }
                }),
                m("input[type=submit][value=skapa].button.green-button", "Skapa")
            ])
        ]);
    }
};

export default orders;
