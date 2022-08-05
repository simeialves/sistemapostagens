const Sequelize = require('sequelize')
const sequelize = new Sequelize('postagem', 'root', 'root', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar: " + erro)
})

const Postagem = sequelize.define('postagens', {
    titulo:{
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true})

// Postagem.create({
//     titulo: "UM TITULO QUALQUER",
//     conteudo: "UM CONTEUDO QUALQUER"
// })

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//Usuario.sync({force: true})

// Usuario.create({
//     nome: "Simei",
//     sobrenome: "Parreiras",
//     idade: 31,
//     email: "simeiparreiras@gmail.com"
// })