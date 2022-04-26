import m from "mithril";

import invoiceModel from "../models/invoices.js";


var invoiceTable = {
    view: function () {
        return m("table.table.table-striped.table-stacked", [
            m("thead", [
                m("tr", [
                    m("th", "Namn"),
                    m("th", "Pris"),
                    m("th", "Fakturadatum"),
                    m("th", "Förfallodatum")
                ])
            ]),
            m("tbody", invoiceModel.invoices.map(function (invoice) {
                return m("tr", [
                    m("td", invoice.name),
                    m("td", invoice.total_price),
                    m("td", invoice.creation_date),
                    m("td", invoice.due_date),
                    m("a", { href: `#!/invoiceinfo/${invoice.id}`, oncreate: m.route.link }, "Info")
                ]);
            }))
        ]);
    }
};

var noInvoices = {
    view: function () {
        return m("p", "Inga fakturor just nu.");
    }
};

var invoices = {
    oninit: invoiceModel.getInvoices,
    view: function () {
        return m("main.container", [
            m("h1", "Fakturor"),
            invoiceModel.invoices.length > 0 ?
                m(invoiceTable) :
                m(noInvoices),
            m(
                "a.button.yellow-button",
                {
                    href: "#/newinvoice",
                    oncreate: m.route.link
                },
                "Skapa faktura"
            ),
            m(
                "a.button.red-button",
                {
                    href: "#/reset",
                    oncreate: m.route.link
                },
                "Reset"
            )
        ]);
    }
};

export default invoices;
