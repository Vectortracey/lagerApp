import m from "mithril";
import { baseUrl, apikey } from "../vars.js";

var auth = {
    url: `${baseUrl}auth/login`,
    email: "",
    password: "",
    token: "",

    clear: function () {
        auth.email = "";
        auth.password = "";
    },

    login: function () {
        m.request({
            url: auth.url,
            method: "POST",
            body: {
                email: auth.email,
                password: auth.password,
                api_key: apikey
            }
        }).then(function (result) {
            console.log(result.data.token);
            auth.token = result.data.token;
            m.route.set("/invoices");
        });
    },
};

export default auth;
