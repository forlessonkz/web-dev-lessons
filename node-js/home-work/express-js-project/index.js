const express = require('express');
const path = require('path');
const ejs = require('ejs');


const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 8000;


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/products', (req, res) => {
    res.render("products")
})


app.listen(PORT, () => {
    console.log(`Port listening on port: ${PORT}`)
})