import m from "mithril";
import { baseUrl, apikey } from "../vars.js";

var register = {
    url: `${baseUrl}auth/register`,
    email: "",
    password: "",

    clear: function () {
        register.email = "";
        register.password = "";
    },

    registerUser: function () {
        console.log(register.email);
        console.log(register.password);
        m.request({
            url: register.url,
            method: "POST",
            body: {
                email: register.email,
                password: register.password,
                api_key: apikey
            }
        }).then(function () {
            m.route.set("/login");
        });
    }
};

export default register;
