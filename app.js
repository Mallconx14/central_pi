const express = require("express");
const app = express();
const mysql = require("./mysql");

app.get("/pontuacao", async (req, res) => {
    const result = await mysql.execute("SELECT * FROM pontuacao");
    return res.status(200).json(result);
});

app.post("/pontuacao", async (req, res) => {
    const result = await mysql.execute(`
        INSERT INTO pontuacao (nome_pista, nome_equipe, total_voltas, tempo_ultima_volta, velocidade_media, posicao)
        VALUES
        ('Interlagos', 'Ferrari', 55, '01:31:20', 215, 1),
        ('Monza', 'Red Bull', 55, '01:32:05', 212, 2),
        ('Silverstone', 'Mercedes', 54, '01:33:10', 208, 3),
        ('Spa-Francorchamps', 'McLaren', 55, '01:31:50', 210, 4),
        ('Suzuka', 'Ferrari', 53, '01:34:00', 205, 5);`);    
    return res.status(200).json(result);
})

app.use((req, res, next) => {
    const error = new Error("Not found...");
    error.status = 404;
    next(error);
});

module.exports = app;