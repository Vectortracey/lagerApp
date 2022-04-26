import m from "mithril";

import orderList from "../models/orders.js";
const invoiceInfo = {
    oninit: function (vnode) {
        orderList.load(vnode.attrs.id);
    },
    view: function () {
        return m("main.container", [
            m("h2", orderList.currentInv.name),
            m("p", "FakturaID: " + orderList.currentInv.id),
            m("p", "OrderID: " + orderList.currentInv.order_id),
            m("p", "Adress: " + orderList.currentInv.address),
            m("p", "Postnummer: " + orderList.currentInv.zip),
            m("p", "Stad: " + orderList.currentInv.city),
            m("p", "Land: " + orderList.currentInv.country),
            m("p", "Totalpris: " + orderList.currentInv.total_price),
            m("p", "Skapad: " + orderList.currentInv.creation_date),
            m("p", "Förfallsdatum: " + orderList.currentInv.due_date),
            m("a", { href: `#!/invoices}`, oncreate: m.route.link }, "Tillbaka")
        ]);
    }
};

export default invoiceInfo;
