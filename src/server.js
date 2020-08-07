//Dados
const proffys = [
    {
    name: "Diego Fernandes", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89289292", 
    bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220],
},

{
    name: "Danilo Evangelista", 
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "89289292", 
    bio: "Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química", 
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220],
}
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
    "Sábado",
]

//Funcionalidades da aplicação
function pageLanding (req, res) {
    return res.render("index.html")
}

function pageStudy (req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses (req, res) {
    const data = req.query

    //se tiver dados
    const isNotEmpty = Object.keys(data).length > 0
    if (isNotEmpty) {
        //adicionar dados a lista de proffys
    proffys.push(data)

    return res.redirect("/study")

    }

    //se não, mostrar a página
    return res.render("give-classes.html", {subjects, weekdays } )
}

// Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//configurar nunjucks (template engie)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//Inicio e configuração do servidor
server
//configurar os arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Start do Servidor
.listen(5000)
