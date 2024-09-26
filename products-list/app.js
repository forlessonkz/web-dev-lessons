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