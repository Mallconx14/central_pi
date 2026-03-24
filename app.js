const express = require("express");
const app = express();
const mysql = require("./mysql");

app.get("/pontuacao", async (req, res) => {
    const dados = req.body;
    const result = await mysql.execute("INSERT INTO pontuacao VALUES " + dados);
    return res.status(200).json(result);
})

app.use((req, res, next) => {
    const error = new Error("Not found...");
    error.status = 404;
    next(error);
});

module.exports = app;