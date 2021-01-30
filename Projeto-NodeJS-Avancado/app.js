const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const buscaCep = require('./src/functions/buscaCep')
const movies = require('./src/functions/movies')

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(bodyParser.urlencoded({extend:true}))
app.use(bodyParser.json())


app.get("/", (req, res) => {
    res.render("index")
});

app.post("/envia_cep", async (req, res) => {
    const { cep }= req.body
    const resultado = await buscaCep(cep)

    res.render("resultado", {dado: resultado})
});

app.post("/envia_filme", async (req, res) => {
    const { movie }= req.body
    const resultado = await movies(movie)

    res.render("resultado2", {dado: resultado})
});

app.listen(1992)