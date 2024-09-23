const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(responde => {
        console.log(responde)
        responde.data.slice(0 , 10).forEach((post)  => console.log(post.id + ': ' + post.title))
    })
