// 1. Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arr1 = [1, 2, 3, 4, 5];
arr1.splice(3, 0, 'a', 'b', 'c')
console.log(arr1)

// 2. Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 0, "a", "b");
arr2.splice(6, 0, "c");
arr2.splice(8, 0, "e")

console.log(arr2)

// 3. Напишите программу в котором, 
// пользователь вводит длину массива и элементы в массиве. 
// После этого отобразите их в консоли.

let arrLength = +(prompt('Enter arrays length'))
let arr3 = [];


for(let i = 0; i < arrLength; i ++){
    arr3.push(prompt('Enter element for array'))
}

console.log(arr3)


let arrLength1 = +(prompt('Enter arrays length'))
let arr4 = [];


// 4. Напишите программу в котором, пользователь вводит 
// длину массива и элементы в массиве. 
// После этого отобразите их в обратном порядке.

for(let i = 0; i < arrLength1; i ++){
    arr4.unshift(prompt('Enter element for array'))
}

console.log(arr4)

// 5. Напишите программу в котором, 
// пользователь вводит длину массива и элементы в массиве. 
// После этого найдите сумму всех элементов массива 