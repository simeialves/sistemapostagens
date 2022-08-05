const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public_html/index.html")
});

app.get("/sobre", function (req, res) {
    res.sendFile(__dirname + ("/public_html/sobre.html"))
});

app.get("/ola/:nome/:profissao", function (req, res) {
    res.send("<h1>Olá " + req.params.nome + "</h1>" +
        "<h2>Seu cargo é :" + req.params.profissao + "</h2>")
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`)
})
