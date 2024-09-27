const express = require('express');
const app = express();
app.set("view engine", "ejs");

const routes = [
    {file: 'index', url: '/'},
    {file: 'new', url: '/new'},
    {file: 'edit', url: '/edit'},
]


routes.forEach(route => {
    app.get(route.url, (req, res) => {
        res.render(route.file)
    })
})

app.get('/', (req, res) => {
    res.render('index')
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`)
});