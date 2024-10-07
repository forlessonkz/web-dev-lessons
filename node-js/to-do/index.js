const express = require('express');
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/todo').then(() => {
    console.log("Connected to MongoDB")
}).catch((e) => {
    console.log("Failed to cnnect to MongoDB")
});

app.use(express.urlencoded());
app.use(express.static(__dirname + "/public"))

const ToDoSchema = new mongoose.Schema({
    title: String,
    description: String,
});

const ToDo = mongoose.model('todo', ToDoSchema);

app.post('/new', async (req, res) => {
    if(req.body.title != 0){
        console.log(req.body)
        await new ToDo ({
            title: req.body.title,
            description: req.body.description
        }).save()
        res.redirect('/')
    }else{
        res.redirect('/new?error=1')
    }
})

app.post('/edit', async (req, res) => {
    console.log(req.body)
    await ToDo.updateOne({
        _id: req.body.id,
    }, {
        title: req.body.title,
        description: req.body.description,
    })
    res.redirect('/')
})

app.delete('/delete/:id', async (req, res) => {
    await ToDo.deleteOne({_id: req.params.id})
    res.status(200).send('OK!')
})

app.set("view engine", "ejs");

// const routes = [
//     {file: 'index', url: '/'},
//     {file: 'new', url: '/new'},
//     {file: 'edit', url: '/edit'},
// ]


// routes.forEach(route => {
//     app.get(route.url, (req, res) => {
//         res.render(route.file)
//     })
// })

app.get('/', async(req, res) => {
    const data = await ToDo.find();
    res.render('index', {data})
})

app.get('/new', (req, res) => {
    res.render('new')
})

app.get('/edit/:id', async (req, res) => {
    console.log(req.params.id)
    const toDoData = await ToDo.findById(req.params.id)

    console.log(toDoData)
    res.render('edit', {data: toDoData})
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`)
});