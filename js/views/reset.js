import m from "mithril";


import { apikey } from "../vars.js";


var resetAll = {
    url: `https://lager.emilfolino.se/v2/copier/reset`,


    reset: function () {
        m.request({
            url: `${resetAll.url}`,
            method: "POST",
            body: {
                api_key: apikey
            }
        }).then(function () {
            m.route.set("/resetInfo");
        });
    }
};

export default resetAll;
