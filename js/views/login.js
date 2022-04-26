import m from 'mithril';
import auth from "../models/auth.js";

let login = {
    view: function () {
        return m("div.container",
            m("h2", "Logga in"),
            m("p", "Vänligen logga in nedan eller registera ett nytt konto."),
            m("form", {
                onsubmit: function(event) {
                    event.preventDefault();
                    auth.login();
                }

            }, [
                m("label.input-label", "E-post"),
                m("input.input[type=email][placeholder=E-post]", {
                    oninput: function (event) {
                        auth.email = event.target.value;
                    },
                    value: auth.email


                }),
                m("label.input-label", "Lösenord"),
                m("input.input[type=password][placeholder=Lösenord]", {
                    oninput: function (event) {
                        auth.password = event.target.value;
                    },
                    value: auth.password

                }),
                m("input.button.green-button[type=submit][value=Logga in].button"),
                m(
                    "a.button.blue-button",
                    {
                        href: "#/register",
                        oncreate: m.route.link
                    },
                    "Registrera"
                )
            ]));
    }
};

export default login;
