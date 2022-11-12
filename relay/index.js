const express = require("express");
const app = express();

const RELAY_KEY = "9a178d38-6296-11ed-a09d-8692b700d4d6";

app.get("/", async (req, res) => {
    if (req.query.relayKey === RELAY_KEY) {
        delete req.query.relayKey;
    } else {
        res.send("Access denied");
        return;
    }

    res.append("Access-Control-Allow-Origin", "*");
    const domain = req.query.endpoint;
    delete req.query.endpoint;
    const url = domain + "?" + (new URLSearchParams(req.query));
    console.log(url);
    res.send(await (fetch(url).then((resp) => resp.json())));
});

app.listen(3000);
