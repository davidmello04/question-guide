const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index", {
        nome: "David"
    })
});

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.params.titulo
    var descricao = req.params.descricao

    //Inserir dados na tabela
})

app.listen(8180, () => {
    console.log("App rodando!");
});
