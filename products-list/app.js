const express = require('express');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs').promises;
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

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
})

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost: ${PORT}`)
})