const express = require("express");
const app = express();
const mysql = require("./mysql");



app.use((req, res, next) => {
    const error = new Error("Not found...");
    error.status = 404;
    next(error);
});

module.exports = app;