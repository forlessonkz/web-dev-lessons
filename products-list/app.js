const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs').promises;
const session = require('express-session');


const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'Your__secret__key',
    resave: false,
    saveUninitialized: true,
}))

const routes = [
    {page: 'home', url: '/'},
    {page: 'products', url: '/products'},
    {page: 'editProduct', url: '/edit'},
    {page: 'addProduct', url: '/add-product'},
    {page: 'cart', url: '/cart'},
    {page: 'wishlist', url: '/wishlist'},
    {page: 'productPage', url: '/product-page'},
    {page: 'error', url: '/error'},
]

async function getProducts() {
    try {
        const data = await fs.readFile(path.join(__dirname, 'data', 'products.json'), 'utf8');
        return JSON.parse(data)
    } catch (error) {
        console.log('Ошибка при чтении данных', error);
        throw error;
    }
}


app.post('/add-to-cart/:id', async (req, res) => {
    const productId = req.params.id;

    if (!req.session.cart) {
        req.session.cart = [];
    }

    try {
        const products = await getProducts();
        const product = products.find(p => p.id === productId);

        if (product) {
            req.session.cart.push(product);
        }

        // Возвращаем JSON с успешным сообщением
        res.json({ success: true, message: 'Product added to cart', product });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding product to cart' });
    }
});


app.get('/cart', (req, res) => {
    const cart = req.session.cart || [];
    res.render('cart', { cart });
});


app.post('/remove-from-cart/:id', (req, res) => {
    const productId = req.params.id;

    req.session.cart = req.session.cart.filter(item => item.id !== productId);

    res.redirect('/cart');
});


app.get('/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.render('products', {products});
    } catch (error) {
        res.status(500).send('Ошибка при загрузке продуктов')
    }
});


routes.forEach(route => {
    app.get(route.url,  (req, res) => {
        res.render(route.page);
    })
})

 
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost: ${PORT}`)
})