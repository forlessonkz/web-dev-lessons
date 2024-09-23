const express = require('express');

const app = express();
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/new', (req, res) => {
    res.render("new")
})

app.get('/edit', (req, res) => {
    res.render("edit")
})


const PORT = 8000;
app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`)
})

