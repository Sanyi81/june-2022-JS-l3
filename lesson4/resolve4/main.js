// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let words = [
    {name: 'word1', index: 1},
    {name: "word2", index: 2},
    {name: 'word3', index: 3},
    {name: 'word4', index: 4},
    {name: 'word5', index: 5},
    {name: 'word6', index: 6},
    {name: 'word7', index: 7},
    {name: 'word8', index: 8},
    {name: 'word9', index: 9},
    {name: 'word10', index:10}
];
for (const word of words) {
    document.write(`<div>${word.name}</div>`);
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

let links = [
    {name: 'word1', index: 1},
    {name: "word2", index: 2},
    {name: 'word3', index: 3},
    {name: 'word4', index: 4},
    {name: 'word5', index: 5},
    {name: 'word6', index: 6},
    {name: 'word7', index: 7},
    {name: 'word8', index: 8},
    {name: 'word9', index: 9},
    {name: 'word10', index:10}
];
for (const link of links) {
    document.write(`<div>${link.name} ${link.index}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let lists = [
    {name: 'title1', order: 1},
    {name: 'title2', order: 2},
    {name: 'title3', order: 3},
    {name: 'title4', order: 4},
    {name: 'title5', order: 5},
    {name: 'title6', order: 6},
    {name: 'title7', order: 7},
    {name: 'title8', order: 8},
    {name: 'title9', order: 9},
    {name: 'title10', order: 10},
    {name: 'title11', order: 11},
    {name: 'title12', order: 12},
    {name: 'title13', order: 13},
    {name: 'title14', order: 14},
    {name: 'title15', order: 15},
    {name: 'title16', order: 16},
    {name: 'title17', order: 17},
    {name: 'title18', order: 18},
    {name: 'title19', order: 19},
    {name: 'title20', order: 20}
];

let f = 0;
while (f < lists.length) {
    document.write(`<h1>${lists[f].name}</h1>`);
    f++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let datas = [
    {name: 'title1', order: 1},
    {name: 'title2', order: 2},
    {name: 'title3', order: 3},
    {name: 'title4', order: 4},
    {name: 'title5', order: 5},
    {name: 'title6', order: 6},
    {name: 'title7', order: 7},
    {name: 'title8', order: 8},
    {name: 'title9', order: 9},
    {name: 'title10', order: 10},
    {name: 'title11', order: 11},
    {name: 'title12', order: 12},
    {name: 'title13', order: 13},
    {name: 'title14', order: 14},
    {name: 'title15', order: 15},
    {name: 'title16', order: 16},
    {name: 'title17', order: 17},
    {name: 'title18', order: 18},
    {name: 'title19', order: 19},
    {name: 'title20', order: 20}
];

let i = 0;
while (i < datas.length) {
    document.write(`<h1>${datas[i].name} ${datas[i].order}</h1>`);
    i++;
}
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

    document.write('<ul>')
for (const key in listOfItems) {
        document.write(`<li>${listOfItems[key]}</li>`);
}
    document.write('</ul>')

//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

// -----------------------------------------------

    // Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
//
for (const product of products) {
    document.write(`<div>
        <h3>${product.title} - ${product.price}</h3>
        <img src="${product.image}" alt="product-image">
</div>`)
}
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту



// --------------------
//     є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (const user of users) {
    if (user.status) {
        console.log(user);
    }
}
// - користувачів зі статусом false

for (const user of users) {
    if (!user.status) {
        console.log(user);
    }
}

// - користувачів які старші за 30 років

for (const user of users) {
    if (user.age >= 30) {
        console.log(user);
    }
}