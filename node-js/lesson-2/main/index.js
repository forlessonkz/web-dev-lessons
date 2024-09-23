// Здесь мы импортируем константу id
// const {id1, id2} = require('./id')

// console.log('ID1: ' + id1);
// console.log('ID2: ' + id2);

// Подключение библиотеки 
// const fs = require('fs');
// const path = require('path');

// В этой строке кода, написанной на Node.js, используется модуль fs (сокращение от "file system") 
// для записи данных в файл. Вот разбор того, что происходит:

// fs.writeFileSync('text.txt', 'Created by nodejs and fs', 'utf-8');

// fs.writeFileSync: Это синхронная функция модуля fs, которая записывает данные в файл. 
// Синхронная версия блокирует выполнение программы, пока запись в файл не будет завершена. 
// Есть также асинхронная версия этой функции, которая не блокирует выполнение программы, — fs.writeFile.

// 'text.txt': Это первый аргумент функции — имя файла, в который будет производиться запись. 
// В данном случае создается или перезаписывается файл с именем text.txt в текущей директории.

// 'Created by nodejs and fs': Это второй аргумент функции — строка, которая будет записана в файл. 
// В данном примере содержимое файла будет текст "Created by nodejs and fs".

// Чтение файлов выполняет следующая команда 

// console.log(fs.readFileSync('text.txt', 'utf-8'));

// fs.writeFileSync(path.join(__dirname, 'abc.txt'), 'Create by node js and fs', 'utf-8');

// __dirname обозначает нынешнию директорию

// console.log(fs.readFileSync(path.join(__dirname, '..' , 'text.txt') , 'utf-8'));

// Изучаем http

// const http = require('http');
// const PORT = 8000;

// const visits = new Map();
// const server = http.createServer((req, res) => {
//     const count = (visits.get(req.url) || 0) + 1
    // get — это метод объекта Map. Он получает значение, связанное с указанным ключом (в данном случае req.url).
    
    // visits.set(req.url , count)
    // set — это метод объекта Map, который сохраняет новое значение (в данном случае обновленный счетчик посещений) для указанного ключа (URL).
//     res.end(`Site opened : ${count}`)
// })

// server.listen(PORT, () => {
//     console.log(`Server work in ${PORT} port`);
// })


