const fs = require('fs');
const path = require('path');
const http = require('http');
const axios = require('axios');

const sumArray = require('./functions/sum.js');
const multiplyArray = require('./functions/multiply.js');
const minusArray = require('./functions/minus.js');
const divideArray = require('./functions/divide.js');
const maxNumArray = require('./functions/divide.js');
const minNumArray = require('./functions/minNum.js');


const routes = [
    { url: '/sum', data: 'sumData.json', func: sumArray, method: 'GET' },
    { url: '/multiply', data: 'sumData.json', func: multiplyArray, method: 'GET' },
    { url: '/minus', data: 'sumData.json', func: minusArray, method: 'GET' },
    { url: '/divide', data: 'sumData.json', func: divideArray, method: 'GET' },
    { url: '/max', data: 'sumData.json', func: maxNumArray, method: 'GET' },
    { url: '/min', data: 'sumData.json', func: minNumArray, method: 'GET' },
];



const server = http.createServer((req, res) => {
    const route = routes.find(route => req.url === route.url && req.method === route.method);

    if (route) {
        const filePath = path.join(__dirname, 'data', route.data);
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Error reading file');
            }

            const numbers = JSON.parse(data);

            const result = route.func(numbers);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ result }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route not found');
    }
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`);
});

