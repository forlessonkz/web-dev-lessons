const http = require('http');
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const sumArray = require('./functions/sum'); 

const port = 3000;

// Создаем футкцию readDataFile для чтения массива из файла data.json
function readDataFile(filePath) {

  return new Promise((resolve, reject) => {
    // Читаем содержимое файла по указанному пути filePath в котировке utf8.

    // Далее (err, data) 
    // err: Если произошла ошибка при чтении файла (например, если файл не существует, неправильно указан путь, проблемы с правами доступа и т.д.) 
    // вызывается reject(err) - промис завершится ошибкой.
    // if (err) {
    //     return reject(err);
    // }

    // data: Если файл успешно прочитан, содержимое файла передастся в переменную data.
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
        // Далее после удачного чтения файла и содержимое файла будет содержать переменная data
      try {
        // Преобразуем текст из JSON - формата в объект или массив 
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (parseError) {
        // Если парсинг не удачен (на пример: файл не содержит корректный JSON), вызывается reject(parseError);
        reject(parseError);
      }
    });
  });
}

// http.createServer: Создаем HTTP сервер. В функцию передаем обработчики событий (req, res) "Вопрос, Ответ".
// req: Это объект запроса, который содержит информацию о заросе клиента, включая URL, метод зароса, заголовки и т.п.
// res: Это объект ответа, через который сервер может отправить данные обратно клиенту.
const server = http.createServer(async (req, res) => {
    // Обработка запроса по маршруту "/sum"
    // req.url === "/sum: Проверяем, был ли запрос сделан по маршруту /sum. Это ознаяает, что клиент должен обратиться серверу по адресу http://localhost:3000/sum
    // req.method == 'GET": Проверяем, что метод запроса - это 'GET'. То есть запрос должен запрашивать данные, а не возвращать
  if (req.url === '/sum' && req.method === 'GET') {

    // path.join(__dirname, 'db', 'data.json'): Составляем путь файлу data.json, котоырй находиться в папке db
    // __dirname это глобальная переменная, которая возвращает путь к директории, в которой находиться текущий файл (в данном случае server.js).
    // path.join: Корректно соеденяет части пути для разных операционных систем (на пример / для Linux и \ для Windows).
    const filePath = path.join(__dirname, 'db', 'data.json'); // Путь к файлу с массивом чисел

    try {
        // Чтение файла и вычисление суммы:
        // await readDataFile(filePath): Асинхронно ждем, пока файл с массивом чисел будет прочитан. Результат выполнения функции будет сохранен в переменную numbers
      const numbers = await readDataFile(filePath);

        // здесь мы вызываем функцию sumArray передавая ей массив чисел и получаем сумму всех елементов массива.
      const sum = sumArray(numbers);

        // res.writeHead(200, {'Content-Type': 'application/json' }) В этой стороке кода мы устанавливаем код ответа 200 (успешно) и указываем, что содержимое ответа будет в форме JSON.
      res.writeHead(200, { 'Content-Type': 'application/json' });


        // res.end(JSON.stryngify({sum})): Преобразуем объект с результатом ({sum}) в строку в формате JSON и отправляем его клиенту.
      res.end(JSON.stringify({ sum }));
    // Далее идет обработка ошибок
    // catch(error): Если возникает ошибка на этапе чтение файла или вычисления суммы
    // На пример, файл не найден или не верынй формат данных, управление передается в этот блок
    } catch (error) {
      // Устанавливаем код ответ 500 (внутренняя ошибка сервера),
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      // Отправляем клиенту сообщение об ошибке  
      res.end('Error processing data');
    }
    // Обработка некорректных маршрутов
  } else {
    // else: Если запрос был сделан не по маршруту /sum сервер отправляет ответ с кодом 404 (страница не найдена ) 
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    // res.end('Rout not found'): Отправляем клиенту сообщение о том, что маршрут не найден
    res.end('Route not found');
  }
});

// server.listen(port): Запускаем сервер на указанном порту (3000).
// Callback: Когда сервер запущен, выводим в консоль сообщение: Server is running on http:localhost:3000,
// указывая, что сервер работает и готов принимать запросы.
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
