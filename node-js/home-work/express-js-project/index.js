const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');


const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 8000;

const routes = [
    {path: '/', view: 'index', name: 'Home'},
    {path: '/product', view: 'products'},
    {path: '/new', view: 'newProduct'},
    {path: '/edit', view: 'editProduct'},
    {path: '/page', view: 'productPage '},
];


routes.forEach(route => {
    app.get(route.path, (req, res) => {
        res.render(route.view);
    });
});


app.listen(PORT, () => {
    console.log(`Port listening on port: ${PORT}`)
})