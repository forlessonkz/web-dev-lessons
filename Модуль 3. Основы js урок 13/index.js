const express = require('express');

const ejs = require('ejs');
const path = require('path')


const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/albums', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=10');
        const albums = await response.json()
        res.render('albums', {albums})
    } catch (error) {
        console.error(`Ошибка при получении альбомов: `, error);
        res.status(500).send('Servers error')
    }
    res.render('albums')
})

app.get('/photos', (req, res) => {
    res.render('photos')
})

app.listen(PORT, () => {
    console.log(`
        Server listening on PORT: ${PORT}
    `)
})