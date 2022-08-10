// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1);
// console.log(str2);
// console.log(str3);
//
// let strUp1 = str1;
// let strUp2 = str2;
// let strUp3 = str3;
// console.log(strUp1.toUpperCase());
// console.log(strUp2.toUpperCase());
// console.log(strUp3.toUpperCase());
//
// let strLo1 = strUp1;
// let strLo2 = strUp2;
// let strLo3 = strUp3;
// console.log(strLo1.toLowerCase());
// console.log(strLo2.toLowerCase());
// console.log(strLo3.toLowerCase());

//---------------------------------------------------------------------------
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str.length);
// for (const strElement of str) {
//     console.log(strElement);
// };
// let clearStr = str.substring(1, str.length-3);
// console.log(clearStr);

//---------------------------------------------------------------------------
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

//---------------------------------------------------------------------------
// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ');
// console.log(split);

//---------------------------------------------------------------------------
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let array = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
// let map = array.map(value => {
//     if (typeof value.number) {
//         return value.toLocaleString();
//     }
// });
// console.log(map);

//----------------------------------------------------------------------------
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [2, 65, 78, 33, 21];
// let sortUp = nums.sort((a, b) => a - b);
// console.log(sortUp);
// let sortDown = nums.sort((a, b) => b - a);
// console.log(sortDown);

//-----------------------------------------------------------------------
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let courses = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let sortMDDown = courses.sort((monthD1, monthD2) => monthD2.monthDuration - monthD1.monthDuration);
// console.log(sortMDDown);
// let courseLength = courses.filter(course => course.monthDuration > 5);
// console.log(courseLength);

//---------------------------------------------------
// описати колоду карт
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
//------------  spade
    {cardSuit: 'spade', value:'6', color: 'black'},
    {cardSuit: 'spade', value:'7', color: 'black'},
    {cardSuit: 'spade', value:'8', color: 'black'},
    {cardSuit: 'spade', value:'9', color: 'black'},
    {cardSuit: 'spade', value:'10', color: 'black'},
    {cardSuit: 'spade', value:'jack', color: 'black'},
    {cardSuit: 'spade', value:'queen', color: 'black'},
    {cardSuit: 'spade', value:'king', color: 'black'},
    {cardSuit: 'spade', value:'ace', color: 'black'},
//------------  clubs
    {cardSuit: 'clubs', value:'6', color: 'black'},
    {cardSuit: 'clubs', value:'7', color: 'black'},
    {cardSuit: 'clubs', value:'8', color: 'black'},
    {cardSuit: 'clubs', value:'9', color: 'black'},
    {cardSuit: 'clubs', value:'10', color: 'black'},
    {cardSuit: 'clubs', value:'jack', color: 'black'},
    {cardSuit: 'clubs', value:'queen', color: 'black'},
    {cardSuit: 'clubs', value:'king', color: 'black'},
    {cardSuit: 'clubs', value:'ace', color: 'black'},
//------------  diamond
    {cardSuit: 'diamond', value:'6', color: 'red'},
    {cardSuit: 'diamond', value:'7', color: 'red'},
    {cardSuit: 'diamond', value:'8', color: 'red'},
    {cardSuit: 'diamond', value:'9', color: 'red'},
    {cardSuit: 'diamond', value:'10', color: 'red'},
    {cardSuit: 'diamond', value:'jack', color: 'red'},
    {cardSuit: 'diamond', value:'queen', color: 'red'},
    {cardSuit: 'diamond', value:'king', color: 'red'},
    {cardSuit: 'diamond', value:'ace', color: 'red'},
//------------  heart
    {cardSuit: 'heart', value:'6', color: 'red'},
    {cardSuit: 'heart', value:'7', color: 'red'},
    {cardSuit: 'heart', value:'8', color: 'red'},
    {cardSuit: 'heart', value:'9', color: 'red'},
    {cardSuit: 'heart', value:'10', color: 'red'},
    {cardSuit: 'heart', value:'jack', color: 'red'},
    {cardSuit: 'heart', value:'queen', color: 'red'},
    {cardSuit: 'heart', value:'king', color: 'red'},
    {cardSuit: 'heart', value:'ace', color: 'red'},
//------------  joker
    {value:'joker', color: 'black'},
    {value:'joker', color: 'red'}
];
// - знайти піковий туз

let spadeAce = cards.find(card => card.value === 'ace' && card.cardSuit === 'spade');
console.log(spadeAce);

// - всі шістки

let sixts = cards.filter(card => card.value === '6');
console.log(sixts);

// - всі червоні карти

let reds = cards.filter(card => card.color === 'red');
console.log(reds);

// - всі буби

let diamonds = cards.filter(card => card.cardSuit === 'diamond');
console.log(diamonds);

// - всі трефи від 9 та більше

let clubsCard = cards.filter(card => card.cardSuit === 'clubs' && (card.value.length > 1));
console.log(clubsCard);

//
// // Додатково по reduce
// // Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// // {
// //     spades:[],
// //         diamonds:[],
// //     hearts:[],
// //     clubs:[]
// // }
let reduce = cards.reduce(function (accumulator,card) {
    if (card.cardSuit === 'spade') {
        accumulator.statusSpades.push(card)
    }
     else if (card.cardSuit === 'diamond') {
         accumulator.statusDiamonds.push(card)
     }
     else if (card.cardSuit === 'heart') {
        accumulator.statusHearts.push(card)
    }
         else if (card.cardSuit === 'clubs') {
        accumulator.statusClubs.push(card)
    }
         else
        {
            accumulator.other.push(card)
        }
    return accumulator;
}, {statusSpades:[], statusDiamonds:[], statusHearts:[], statusClubs:[], other:[]});
console.log(reduce);