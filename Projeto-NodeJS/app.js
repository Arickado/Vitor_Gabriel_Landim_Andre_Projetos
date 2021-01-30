const express = require('express');
const app = express();

const connect = require('./banco/connect');
app.use(express.json());


app.get("/produtos", (req, res) => {
    connect.query("SELECT * FROM produtos", (error, result) =>{
        res.json(result);
    });
});

app.post("/pedidos", (req, res) => {
    let dados = [];

    dados.push({
        cliente: req.body.cliente,
        produto: req.body.produto,
    });
    connect.query("INSERT INTO post SET ?", dados, () =>{
        dados =[];
        res.json({mensasgem: "Dados enviados"});
    });
});

app.listen(1992)
