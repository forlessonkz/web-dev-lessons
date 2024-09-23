const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 5500;

// Изучить методы req, res, http, fs

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm',
}

// http.createServer((req, res) => {
//     const url = req.url;
//     console.log(url)
//     res.setHeader('Content-Type', 'text/html; charset=utf-8;')
    
//     switch (url) {
//         case '/':
//             console.log('Main page')
//             res.write('<h1>It is Main page</h1>')
//             res.end()
//             break;
//         case '/contact':
//             console.log('Contact page')
//             let data = fs.readFileSync('./public/contact.html', {encoding: 'utf-8', flag: 'r'});
//             res.write(data)
//             res.end()
//             break;
//         default: 
//         if(url.includes('/img')){
//             console.log('Images =>>>')
//             fs.readFile('./public' + url, {}, (error, data) => {
//                 if(error){

//                 }
//                 console.log('get image ===============>')
//                 res.setHeader('Content-Type', 'image/png')
//                 res.write(data)
//                 res.end()
//             })
            
//         }else{
//             console.log('404')
//             res.write('<h1>404</h1>')
//             res.end()
//         }
//     }
    
// }).listen(PORT)

function staticFile(res, filePath, ext){
    res.setHeader('Content-Type', mimeTypes[ext]);
    fs.readFile('./public' + filePath, {encoding: 'utf8', flag: 'r'}, (error, data)=> {
        if (error) {
            res.statusCode = 404
            res.end()
        }
        res.end(data)
    })
}


http.createServer((req, res) => {
    const url = req.url;
    console.log(url)

    switch(url){
        case '/contact':
            console.log('Clien opens contacts page!');
            staticFile(res, '/contact.html', '.html');
            break;
    }
}).listen(PORT);