require("dotenv").config();
const express = require("express");
const app = express();

app.get("/welcome", (req, res) => {
    try {
        res.send("Welcome to my server. Please enjoy some tea.");
    } catch(err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = app;
