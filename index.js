const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post');
const { functionsIn } = require("lodash");

//#region Config
// Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//#endregion

//#region Rotas
//Rotas

app.get('/', function (req, res) {
    Post.findAll({ order: [['id', 'desc']] }).then(function (posts) {
        res.render('home', { posts: posts })
    })
})

app.get('/cad', function (req, res) {
    res.render('formulario')
})

app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send("Houve um erro:" + erro)
    })
})

app.get('/deletar/:id', function (req, res) {
    Post.destroy({ where: { 'id': req.params.id } }).then(function () {
        res.send("Postagem deletada com sucesso!")
    }).catch(function (erro) {
        res.send("Esta postagem não existe!")
    })
})
//#endregion

let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Servidor rodando na porta ${port}`)
})
