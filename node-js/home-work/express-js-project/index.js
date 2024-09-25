const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const ejs = require('ejs');
const session = require('express-session');


const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
    secret: 'YouSecretKey',
    resave: false,
    saveUninitialized: true,
}));

app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

const getProducts = async () => {
    const filePath = path.join(__dirname, 'db', 'products.json');
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
}

const routes = [
    {path: '/', view: 'index'},
    {path: '/product', view: 'products'},
    {path: '/new', view: 'newProduct'},
    {path: '/edit', view: 'editProduct'},
    {path: '/cart', view: 'cart'},
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
        const products = await getProducts();
        res.render('products', {products})
    } catch (err) {
        console.error("Error reading the file", err);
        res.status(500).send('Server Error')
    }
});

app.post('add-to-cart', async(req, res) => {
    const productId = req.body.productId;
    const products = await getProducts();

    // Finde product by ID
    const product = products.find( p => p.id === productId);

    if (!req.session.cart) {
        req.session.cart = [];
    }

    req.session.cart.push(product);
    res.redirect('/product');
})

app.get('/cart', (req, res) => {
    const cart = req.session.cart || [];
    res.render('cart', { cart });
});

app.listen(PORT, () => {
    console.log(`Port listening on port: ${PORT}`)
})