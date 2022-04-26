import m from "mithril";

import list from "./views/list.js";
import form from "./views/form.js";
import layout from "./views/layout.js";
import login from "./views/login.js";
import invoices from "./views/invoices.js";
import auth from "./models/auth.js";
import invoiceInfo from "./views/invoiceInfo.js";
import registerNew from "./views/register.js";
import orders from "./views/newinvoice.js";
import resetAll from "./views/reset.js";
import resetInfo from "./views/resetInfo.js";



m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, m(list));
        }
    },
    "/form": {
        render: function() {
            return m(layout, m(form));
        }
    },
    "/invoices": {
        onmatch: function() {
            if (auth.token) {
                return invoices;
            }
            return m.route.set("/login");
        },
        render: function (vnode) {
            return m(layout, vnode);
        }
    },
    "/login": {
        render: function () {
            return m(layout, m(login));
        }
    },
    "/newinvoice": {
        render: function () {
            return [m(layout), m(orders)];
        }
    },
    "/register": {
        render: function () {
            return [m(layout), m(registerNew)];
        }
    },
    "/invoiceinfo/:id": {
        render: function (vnode) {
            return [m(layout), m(invoiceInfo, vnode.attrs)];
        }
    },
    "/reset": {
        render: function () {
            return [m(layout), m(resetAll.reset)];
        }
    },
    "/resetInfo": {
        render: function () {
            return [m(layout), m(resetInfo)];
        }
    }
});
