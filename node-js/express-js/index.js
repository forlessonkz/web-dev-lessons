const express = require("express");
const ejs = require('ejs')

const app = express();
app.set("view engine", "ejs")



const PORT = 8000;

let count = 0;

app.post('/count' , (req, res) => {
    count ++
    res.send({count})
})

app.get('/' , (req, res) => {
    res.render("index", {count})
})
app.get('/contact' , (req, res) => {
    res.end('It is contacts page!')
})


app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`)
})