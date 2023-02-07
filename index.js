const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render("index", {
        nome: "David"
    })
});

app.listen(8180, () => {
    console.log("App rodando!");
});
