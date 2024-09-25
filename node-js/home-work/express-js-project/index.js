const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const ejs = require('ejs');


const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))

const PORT = 8000;

const getProduct = async () => {
    const filePath = path.join(__dirname, 'db', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

const routes = [
    {path: '/', view: 'index'},
    {path: '/product', view: 'products'},
    {path: '/new', view: 'newProduct'},
    {path: '/edit', view: 'editProduct'},
    {path: '/page', view: 'productPage '},
];


routes.forEach(route => {
    if(route.path !== '/product') {
        app.get(route.path, (req, res) => {
            res.render(route.view);
        });
    } 
});

app.get('/product', async (req, res) => {
    try {
        const products = await getProduct();
        res.render('products', {products})
    } catch (err) {
        console.error("Error reading the file", err);
        res.status(500).send('Server Error')
    }
})

app.listen(PORT, () => {
    console.log(`Port listening on port: ${PORT}`)
})