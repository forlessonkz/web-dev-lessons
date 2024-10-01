const express = require('express');
const ejs = require('ejs');



const app = express();

app.use(express.static(__dirname, + '/public'))
app.set('view engine', 'ejs');

const PORT = 8888;


app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})
