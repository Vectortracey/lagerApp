"use strict";

import m from "mithril";
import auth from "../models/auth.js";



var layout = {
    links: [
        { name: "Hem", route: "#!/" },
        { name: "Lägg till inleverans", route: "#!/form" },
        { name: "Leveranser", route: "#!/invoices" },
        { name: "Logga in", route: "#!/login" }
    ],
    view: function (vnode) {
        var topNav = vnode.attrs.topNav;
        var bottomNav = vnode.attrs.bottomNav;

        return [
            m("nav.top-nav", { textContent: "Lager 4" }, [
                topNav ? m("span", [
                    m("a", { href: topNav.route }, topNav.title)
                ]) : null
            ]),
            m("main.container", vnode.children),
            m("nav.bottom-nav", layout.links.map(function (link) {
                if (link.route === "#!/new" && auth.token === "") {
                    return null;
                }

                return m("a", {
                    href: link.route,
                    class: bottomNav === link.route ? "active" : null
                }, link.name);
            }))
        ];
    }
};

export default layout;
