// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sRect (a , b) {
//     return a * b;
// }
// let s = sRect(5, 6)
// console.log(s)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function sCircle (pi, r) {
//     return pi * r*r;
// }
// const pi = +Math.PI;
// let sC = sCircle (pi, 5)
// console.log(sC);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r. 𝑆(біч.)= 2πRH, 𝑆(кола)= 𝜋𝑅2

// function sBarrel (sSide, sCirc) {
//
//     return sSide + sCirc;
// }
// const pi = +Math.PI;
// let r = 6;
// let h = 12;
// let sSide = (2 * pi * r * h);
// let sCirc = (pi * r*r);
// console.log(sSide, sCirc);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let numbers = [1, 2, 4, 56, 77, 89, -234, 'sokol', true];
//
// function arrayPrint (array) {
//     for (const element of array) {
//     console.log(element)
// }
// }
// arrayPrint(numbers);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function wordPrint (word) {
//     document.write(`<p>${word}</p>`)
// }
// wordPrint('koko')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let showText = (text) => {
// for (i = 0; i < 3; i++) {
//     document.write(`<ul><li>${text}</li></ul>`)
// }
// }
// showText('Cucumber')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let printText = (text, liCount) => {
// for (i = 0; i < liCount; i++) {
//     document.write(`<ul><li>${text}</li></ul>`)
// }
// }
// printText('Wolf', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let array = [56, 77, 'moon', true, -98, false, 'BMW']
// function arrPrint (arr) {
//     for (i = 0; i < array.length; i++) {
//     document.write(`<ul><li>${arr[i]}</li></ul>`)
//     }
// }
// arrPrint(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//      ?
// let users = [
//     {id: 1, name: 'vasya', age: 31},
//     {id: 2, name: 'petya', age: 30},
//     {id: 3, name: 'kolya', age: 29},
//     {id: 4, name: 'olya', age: 28},
//     {id: 5, name: 'max', age: 30},
//     {id: 6, name: 'anya', age: 31},
// ];
// function usersPrint (array) {
//     for (i = 0; i < users.length; i++) {
//     document.write(`<div>${array[i]}</div>`)
//     }
// }
// usersPrint(users)
//      ?

// - створити функцію яка повертає найменьше число з масиву

// let array = [1, 4, 8, -12, 87, -43, 87, -111]
// function findMin(elem) {
//     let min = elem[0];
//     for (i = 0; i < elem.length; i++) {
//         if (min > elem[i]) {
//             min = elem[i];
//     }
//         }
//     return min;
//     }
// console.log(findMin(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sumElements () {
//     let result = 0;
//             for (let i = 1; i < arguments.length; i++) {
//                 num = arguments[i];
//                 result += num;
//             }
//   return result;
// }
// console.log(sumElements('+', 2, 5, 6, 12, 8))