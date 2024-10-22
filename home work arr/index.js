// 1. Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arr1 = [1, 2, 3, 4, 5];
// arr1.splice(3, 0, 'a', 'b', 'c')
// console.log(arr1)

// 2. Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arr2 = [1, 2, 3, 4, 5];
// arr2.splice(1, 0, "a", "b");
// arr2.splice(6, 0, "c");
// arr2.splice(8, 0, "e")

// console.log(arr2)

// 3. Напишите программу в котором, 
// пользователь вводит длину массива и элементы в массиве. 
// После этого отобразите их в консоли.

// let arrLength = +(prompt('Enter arrays length'))
// let arr3 = [];


// for(let i = 0; i < arrLength; i ++){
//     arr3.push(prompt('Enter element for array'))
// }

// console.log(arr3)


// let arrLength1 = +(prompt('Enter arrays length'))
// let arr4 = [];


// 4. Напишите программу в котором, пользователь вводит 
// длину массива и элементы в массиве. 
// После этого отобразите их в обратном порядке.

// for(let i = 0; i < arrLength1; i ++){
//     arr4.unshift(prompt('Enter element for array'))
// }

// console.log(arr4)

// 5. Напишите программу в котором, 
// пользователь вводит длину массива и элементы в массиве. 
// После этого найдите сумму всех элементов массива 

// let arrLength3 = +(prompt('Enter arrays length'));
// let arr5 = [];
// let count = 0;

// for (let i = 0; i < arrLength3; i ++) {
//     arr5.push(+(prompt('Enter num'))) 
// }


// for (let i = 0; i < arr5.length; i ++) {
//     count += arr5[i]
// }

// console.log(count)

// 7. Дана переменная arr, который содержит числа.  
// Среди элементов массива с четными индексами, 
// найдите тот, который имеет максимальное значение.
// Пример 1
// arr=[2,4,1,5,8]
// Ответ: 8

// let arr7 = [2,4,1,5,8];
// let maxNum = 0;
// for(let i = 0; i < arr7.length; i ++) {
//     if(i % 2 === 0 && arr7[i] > maxNum){
//         maxNum = arr7[i]
//     }
// }

// console.log(maxNum);

// 8. Найти в массиве те элементы, значение которых, 
// больше среднего арифметического, взятого от всех элементов массива.

// let arr8 = [1,2,3,10,20,30];
// let arr9 = [];
// let count = 0
// let count1 = 0

// for(let i = 0; i < arr8.length; i ++){
//     count += arr8[i];
//     count1 += 1;
// }


// let count3 = count / count1

// for(let i = 0; i < arr8.length; i ++){
//     if(arr8[i] > count3){
//         arr9.push(arr8[i])
//     }
// }


// console.log(arr9)

// let sum = arr8.reduce((acc, val) => acc + val, 0);

// let sred = sum / arr8.length;

// let arr9 = arr8.filter(val => val > sred);

// console.log(arr9)


// 9. В массиве найти элементы, находящихся между индексами минимального и максимального элемента. 
// Самый минимальный и максимальный элементы в интервал не включать
// Пример 1
// arr=[2,3,1,7,8,9]
// Ответ: 7,8

// let arr = [2,3,1,7,8,9];

// let min = arr.indexOf(Math.min(...arr));
// let max = arr.indexOf(Math.max(...arr));
// let start = Math.min(min, max) + 1;
// let end = Math.max(min, max);

// let res = arr.slice(start, end);
// console.log(res)


// 10. Заполнить массив положительными и отрицательными целыми числами. 
// Удалите из массива все отрицательные элементы и выведите.
// Пример 1
// аrr=[2,4,-10,-1,-8,6]
// Ответ: [2,4,6]

// let arr = [2, 4, -10, -1, -8, 6];
// let arr2 = arr.filter(number => number >= 0);
// console.log(arr2)


// 11. Заполнить массив числами. 
// Найти и вывести на экран наибольший его элемент и позицию этого элемента.
// Пример 1
// аrr=[2,4,-10,-1,-8,6]
// Ответ: элемент=6, позиция=5

// let arr = [2, 4, -10, -1, -8, 6];
// let maxElement = Math.max(...arr);
// let position = arr.indexOf(maxElement);

// console.log(`
//     элемент = ${maxElement} 
//     позиция = ${position}
// `); 

// 12. Надо найти среднее значение чисел числа например если у Пользователя есть значение  3425, 
// и результат должен быть таким: (3 + 4 + 2 + 5) / 4 = 14 / 4 = 3.5

// let num = 3425;
// let arr = num.toString().split('').map(Number);
// let sum = arr.reduce((acc, val) => acc + val, 0);
// let sred = sum / arr.length;

// console.log(sred);
