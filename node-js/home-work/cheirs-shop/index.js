const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 8000;

const ejs = require('ejs');

app.set("view engine", 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/new', (req, res) => {
    res.render('new')
});

app.get('/edit', (req, res) => {
    res.render('edit')
});


app.get('/products', async (req, res) => {
    const filePath = path.join(__dirname, "data", "productsData.json");
    try {
        const data = await fs.readFile(filePath, "utf-8");

        const products = JSON.parse(data);

        res.render('products', {products});
    } catch (error) {
        console.error('Error reading file:', error);
        res.status(500).send('Error reading product data')
    } 
});


app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
});