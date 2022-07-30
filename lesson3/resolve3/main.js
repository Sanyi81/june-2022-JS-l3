// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt ('Введіть цифру');
console.log(x);
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('He вірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('enter a minute number 0-59');
console.log(time);
if (time >= 0 && time <= 15) {
    console.log('it is a first quarter');
} else if (time >15 && time <= 30) {
    console.log('it is a second quarter')
} else if (time >30 && time <= 45) {
    console.log('it is a third quarter')
} else if (time >45 && time <= 59) {
    console.log('it is a forth quarter')
} else {
    console.log('wrong number')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Enter the date from 1 to 31');
console.log(day);
if (day >= 1 && day <= 10) {
    console.log('It is a first decade');
} else if (day >10 && day <= 20) {
    console.log('It is a second decade')
} else if (day >20 && day <= 31) {
    console.log('it is a third decade')
} else {
    console.log('wrong number')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що
//     заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('enter a number from 1 to 7');
switch (week) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('wrong');
}

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('enter a number');
console.log(num1);
let num2 = +prompt('enter another number');
console.log(num2);
if (num1 > num2) {
    console.log('the bigger number is', num1);
} else if (num1 === num2) {
    console.log('the numbers are equals');
} else {
    console.log('the bigger number is', num2);
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне,
//     тобто кастується до false)

let num = +prompt('enter a number') || "default";
console.log(num);
