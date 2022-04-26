import m from "mithril";

import register from "../models/register.js";

var registerNew = {
    oninit: register.clear,
    view: function() {
        return m("main.container", [
            m("h1", "Registrera"),
            m("form", {
                onsubmit: function (event) {
                    event.preventDefault();
                    register.registerUser();
                }
            }, [
                m("label.input-label", "E-post"),
                m("input[type=email].input", {
                    oninput: function(event) {
                        register.email = event.target.value;
                    }
                }),
                m("label.input-label", "Lösenord"),
                m("input[type=password].input", {
                    oninput: function(event) {
                        register.password = event.target.value;
                    }
                }),
                m("input[type=submit][value=Registrera].button.green-button", "Registrera"),
            ])
        ]);
    }
};

export default registerNew;
