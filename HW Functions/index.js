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

let arr = [-2,442,1,-6,1,563,-4];

function separateNumbers(arr) {
    let arr1 = [],
        arr2 = [];
    for(let i = 0; i < arr.length; i ++) {
        if(arr[i] >= 0) {
            arr1.push(arr[i])
        } else {
            arr2.push(arr[i])
        }
    }
    console.log(arr1, arr2)
}

separateNumbers(arr);