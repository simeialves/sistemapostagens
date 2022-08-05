const e = require("express")
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/aprendendo").then(() => {
    console.log("MongoDB Conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mondoDB: " + err)
})

//Model - Usuários
//Definindo o model
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})
//Collection
mongoose.model('usuarios', UsuarioSchema)

const novoUsuario = mongoose.model('usuarios')

new novoUsuario({
    nome: "Simei",
    sobrenome: "Parreiras",
    email: "simeiparreiras@gmail.com",
    idade: 31,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuário criado com sucesso!")
}).catch((err) => {
    console.log("Houve um erro ao registrar o usuário: " + err)
})