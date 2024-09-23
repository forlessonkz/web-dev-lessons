const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        data.slice(0 , 10).forEach((post)  => console.log(post.id + ': ' + post.title))
    })