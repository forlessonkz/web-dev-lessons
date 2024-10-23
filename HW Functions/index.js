// 1. Создайте  функцию которая находить сумму всех элементов массива
// let arr = [1,2,3,10,20,30];

// function getSum(arr) {
//     let sum = 0;
//     arr.forEach(el => sum += el)
//     console.log(sum)
// }

// getSum(arr)


// 2. Напишите функцию, которая высчитывает и возращает  
// сколько раз встречается буква в данной строке. 

// let str = 'we were just kids';

// function getLet(str, letter) {
//     let arr = str.split('');
//     let count = 0;
//     arr.forEach((el) => {
//         if(letter === el){
//             count += 1
//         }
//     })
//     console.log(count)
// }

// getLet(str, 's')

// let str = 'we were just kids';

// function getLetterSum(str, letter) {
//     return str.split('').filter(el => el === letter).length
// }

// console.log(getLetterSum(str, 's'))

// 3. Дана переменная massiv, которая является массивом состоящим из чисел. 
// Нужно написать функцию, которая вычисляет среднее арифметическое элементов данного массива, 
// переданного ей в качестве аргумента:

// let arr1 = [1, 2, 3, 4, 5],
//     arr2 = [13, 24, 35, 46],
//     arr3 = [-68, 325, 33, 40, 2, 8];

//     function getAverage(arr) {
//         let sum = arr.reduce((acc, el) => acc + el, 0);
//         return (sum / arr.length);
//     }

// console.log(
//     getAverage(arr1), 
//     getAverage(arr2), 
//     getAverage(arr3)
// )

// 4. Дана переменная massiv, которая является массивом состоящим из чисел 1, 13, 99, 440, 55. 
// Нужно написать функцию, которая находит:
// а) минимальный элемент массива, переданного ей в качестве аргумента 
// б) максимальный элемент массива, переданного ей в качестве аргумента
// Ответы: а) 1; б) 440;

// let arr = [1, 13, 99, 440, 55];

// function getMaxMinNum(arr) {
//     let max = Math.max(...arr)
//     let min = Math.min(...arr)
//     console.log(`
//         Max alement: ${max}
//         Min alement: ${min}
//     `)
// }

// getMaxMinNum(arr)


// 5. Напишите алгоритм который разбивает массив на два массива если там встречаются отрицательные значения. 
// Например [-2,442,1,-6,1,563,-4]
// Результат должен быть вот таким Первый массив [-2,-6,-4] который хранить в себе только отрицательные значения 
// Второй массива [442,1,1,562] который хранить в себе только положительные значения  

// let arr = [-2,442,1,-6,1,563,-4];

// function separateNumbers(arr) {
//     let arr1 = [],
//         arr2 = [];
//     for(let i = 0; i < arr.length; i ++) {
//         if(arr[i] >= 0) {
//             arr1.push(arr[i])
//         } else {
//             arr2.push(arr[i])
//         }
//     }
//     console.log(arr1, arr2)
// }

// separateNumbers(arr);

// 6. Дан пустой массив. Нужно написать функцию, 
// которая заполняет массив числами от 1 до n и возвращает уже заполненный массив. 
// Функция должна принимать два параметра - массив и его размер (число n):
// а) нужно заполнить массив четными числами
// б) нужно заполнить массив нечетными числами
// Пример 1.
// 	 massiv = [], n = 5;
// 	 ответ: а) [2, 4]
// 		б) [1, 3, 5]
	
// Пример 2.
// 	 massiv = [], n = 12;
// 	 ответ: а) [2, 4, 6, 8, 10, 12]
// 		б) [1, 3, 5, 7, 9, 11]
	
// Пример 3.
// 	 massiv = [], n = 9;
// 	 ответ: а) [2, 4, 6, 8]
// 		б) [1, 3, 5, 7, 9]


// let arr1 = [];
// let arr2 = [];

// let arr = []

// function pushElement(arr, n){
//     let arr1 = [],
//         arr2 = [];
//     for(let i = 0; i < n; i ++) {
//         if((i + 1) % 2 === 0){
//             arr1.push((i + 1))
//         }else{
//             arr2.push((i + 1))
//         }
//     }
//     console.log(arr1, arr2)
// }

// pushElement(arr, 7)

// 7.Написать функцию, которая находит в тексте самое длинное слово. 
// Пример 1
// text=They are absolutely unstoppable
// Ответ: unstoppable

// let text = 'They are absolutely unstoppable';
// function findWord(text) {
//     const words = text.split(" ");
//     let longestWord = "";
//     for (let word of words) {
//       if (word.length > longestWord.length) {
//         longestWord = word;
//       }
//     }
//     return longestWord;
//   }
// console.log(findWord(text))
  
// 8. Написать функцию, которая определяет сколько в массиве четных и нечетных чисел.
// Пример 1
// а=[2,3,1,5,6]
// Ответ: четных-2, нечетных-3

// let a = [2,3,1,5,6]; 

// function pushElement(a) {
//     let pos = 0,
//         neg = 0;
//     for(let i = 0; i < a.length; i ++) {
//         if(a[i] % 2 == 0) {
//             pos += 1
//         }else{
//             neg += 1
//         }
//     }

//     return` 
//         Положительных елеменов: ${pos}
//         Отрицательных елементов: ${neg}
//     `
// }

// console.log(pushElement(a))

// 9. Написать функцию season, принимающую 1 аргумент — номер 
// месяца (от 1 до 12), и возвращающую время года, которому этот месяц принадлежит 
// (зима, весна, лето или осень). Если номер месяца некорректный, то возвращать значение ‘неправильный месяц’
// Пример 1
// а=4
// Ответ: весна	

// function season(month) {
//     if (month < 1 || month > 12) {
//       return "неправильный месяц";
//     }
//     if (month === 12 || month === 1 || month === 2) {
//       return "зима";
//     } else if (month >= 3 && month <= 5) {
//       return "весна";
//     } else if (month >= 6 && month <= 8) {
//       return "лето";
//     } else if (month >= 9 && month <= 11) {
//       return "осень";
//     }
//   }

//   const a = 4;
//   const result = season(a);
//   console.log(`Ответ: ${result}`);

// 10. Есть массив из объектов films, каждый фильм состоит из свойств name, genre, year. 
// Нужно написать 2 функции, которые принимают 2 аргумента:
// 	а)  1 аргумент массив фильмов, 2 аргумент genre. Нужно вывести в консоль фильмы с данным жанром
// 	б)  1 аргумент массив фильмов, 2 аргумент year. Нужно вывести те фильмы, у которых год выше аргумента year.

// const films = [
//     { 
//         name: "Inception", 
//         genre: "sci-fi",
//          year: 2010 
//     },
//     { 
//         name: "The Matrix",
//         genre: "sci-fi",
//         year: 1999 
//     },
//     { 
//         name: "Titanic",
//         genre: "drama",
//         year: 1997 
//     },
//     { 
//         name: "The Godfather",
//         genre: "crime",
//         year: 1972 
//     },
//     { 
//         name: "Interstellar",
//         genre: "sci-fi",
//         year: 2014 
//     },
//     { 
//         name: "Pulp Fiction",
//         genre: "crime",
//         year: 1994 
//     }
//   ];
  
//   function findFilmsByGenre(filmsArray, genre) {
//     const filteredFilms = filmsArray.filter(film => film.genre === genre);
//     console.log("Фильмы с жанром", genre + ":");
//     filteredFilms.forEach(film => console.log(film.name));
//   }
  
//   function findFilmsAfterYear(filmsArray, year) {
//     const filteredFilms = filmsArray.filter(film => film.year > year);
//     console.log(`Фильмы, выпущенные после ${year} года:`);
//     filteredFilms.forEach(film => console.log(film.name));
//   }

//   findFilmsByGenre(films, "sci-fi");
//   findFilmsAfterYear(films, 2000);



// 11. Дана переменная users (пользователи), которая является массивом состоящим из объектов. 
// Каждый элемент массива состоит из свойств login (логин), password (пароль) и name (имя), 
// которые являются строкой. Нужно написать функцию, которая принимает в виде аргумента 
// 3 значения: объект -  определенного пользователя, 
// строку - название свойства значение которого нужно заменить, строку - новое значение. 
// Пример: 
// users = [
// 	{
// 		login: «alice19»,
// 		password: «alice19»,
// 		name: «»
// 	},
// 	{
// 		login: «richard18»,
// 		password: «richard18»,	
// 		name: «Richard»
// 	},
// 	{
// 		login: «sam22»,
// 		password: «»,
// 		name: «Sam»
// 	}
// ]

// function changeProperty(user, property, value) {
// 	//Ваш код
// }

// changeProperty(users[0], «login», «alice5555»);

// В результате: 
// 	users[0] = {
// 		login: «alice5555»
// 		password: «alice19»,
// 		name: «»
// 	}


// const users = [
//     {
//       login: "alice19",
//       password: "alice19",
//       name: ""
//     },
//     {
//       login: "richard18",
//       password: "richard18",
//       name: "Richard"
//     },
//     {
//       login: "sam22",
//       password: "",
//       name: "Sam"
//     }
//   ];
  

//   function changeProperty(user, property, value) {
//     if (user.hasOwnProperty(property)) {
//       user[property] = value;
//     } else {
//       console.log(`
//             Свойство '${property}' не найдено.
//         `);
//     }
//   }
  

//   changeProperty(users[0], "login", "alice5555");
  
//   console.log(users[0]);
  

// 12. Напишите свой алгоритм который будет находить сумму элемента и отправьте в новый массив. Например: 
// [12,43,123,44,22]
// их сумма элементов равна [3,7,6,8,4]


// function sumOfDigitsArray(arr) {
//     const result = [];
  
//     for (let num of arr) {
//       const sum = num
//         .toString()
//         .split("")
//         .reduce((acc, digit) => acc + parseInt(digit), 0);
      
//       result.push(sum);
//     }
  
//     return result;
//   }
  
//   const numbers = [12, 43, 123, 44, 22];
//   const sumArray = sumOfDigitsArray(numbers);
//   console.log(sumArray);
  

// 13. Реализуйте функцию, которая параметром будет принимать число 
// и возвращать массив чисел на которое делится наше число. 
// К примеру, если мы передадим число 48 - мы должны получить массив [1, 2, 3, 4, 6, 12, 24, 48].
// function findDivisors(num) {
//     const divisors = [];
    
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         divisors.push(i);
//       }
//     }
    
//     return divisors;
//   }
  
//   const number = 48;
//   const divisorsArray = findDivisors(number);
//   console.log(divisorsArray);
  