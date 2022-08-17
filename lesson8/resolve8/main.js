// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
// new User('1', 'serge', 'vanovsky', 'pps@kj.com', 888888888),
// new User('2', 'ivo', 'ron', 'ron@ita.com', 777777777),
// new User('3', 'andrii', 'gal', 'gal@typ.com', 99999999),
// new User('4', 'sasha', 'noi', 'noi@kj.com', 54321890),
// new User('5', 'sveta', 'sokol', 'sokol@jm.com', 444444444),
// new User('6', 'olha', 'koko', 'koko@kj.com', 333333333),
// new User('7', 'peter', 'stark', 'st@st.com', 222222222),
// new User('8', 'lana', 'roy', 'roy@kj.com', 34573455),
// new User('9', 'sam', 'smith', 'smith@lo.com', 398475764756),
// new User('10', 'habiba', 'harlan', 'har@kj.com', 987648756),
// ]
// console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let userIdPear = users.filter(user => user.id%2 === 0);
// console.log(userIdPear)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortUserUp = users.sort((id1, id2) => id1 - id2);
// console.log(sortUserUp);

//---------------------------------------------------------------------------------------

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


// function Client (id, name, surname , email, phone, order) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// let clients = [
//     new Client('1', 'serge', 'vanovsky', 'pps@kj.com', 888888888, ['lemon', 'potato', 'coffee']),
//     new Client('2', 'ivo', 'ron', 'ron@ita.com', 777777777, ['bread', 'cola', 'butter']),
//     new Client('3', 'andrii', 'gal', 'gal@typ.com', 99999999, ['bread', 'butter', 'chocolate', 'cookies']),
//     new Client('4', 'sasha', 'noi', 'noi@kj.com', 54321890, ['cola', 'orange']),
//     new Client('5', 'sveta', 'sokol', 'sokol@jm.com', 444444444,['croassans', 'cucumber', 'beer']),
//     new Client('6', 'olha', 'koko', 'koko@kj.com', 333333333, ['cookies', 'bread', 'potato']),
//     new Client('7', 'peter', 'stark', 'st@st.com', 222222222, ['bread', 'butter', 'chocolate', 'cookies', 'shanpoo']),
//     new Client('8', 'lana', 'roy', 'roy@kj.com', 34573455, ['bread', 'sugar', 'tomato', 'ketchup', 'butter', 'chocolate', 'cookies']),
//     new Client('9', 'sam', 'smith', 'smith@lo.com', 398475764756, ['lemon', 'orange', 'apple', 'cucumber', 'potato']),
//     new Client('10', 'habiba', 'harlan', 'har@kj.com', 987648756, ['pizza'])
// ]
// console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let clientSort = clients.sort(({order: order1}, {order: order2}) => order1.length - order2.length);
// console.log(clientSort);

//---------------------------------------------------------------------------------------

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, producer, graduationYear, maxSpeed, engineV) {
//     this.model = model;
//     this.producer = producer;
//     this.graduationYear = graduationYear;
//     this.maxSpeed = maxSpeed;
//     this.engineV = engineV;
//     this.drive = () => {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = () => {
//         console.log(`model - ${this.model}`)
//         console.log(`producer - ${this.producer}`)
//         console.log(`graduationYear - ${this.graduationYear}`)
//         console.log(`maxSpeed - ${this.maxSpeed}`)
//         console.log(`engineV - ${this.engineV}`)
//         this.increaseMaxSpeed = newSpeed => {this.maxSpeed = newSpeed};
//         this.changeYear = newValue => {this.graduationYear = newValue};
//         this.addDriver = driver => {this.driver = driver};
//     }
//
// }
// let car = new Car('Stepway', 'Renault', '2017', '190','0,9' );
//     console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(195);
// car.changeYear(2019);
// car.addDriver({name:'Alex', driving_licence:true});
// console.log(car);

//---------------------------------------------------------------------------------------

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car {
//     constructor(model, producer, graduationYear, maxSpeed, engineV) {
//         this.model = model;
//         this.producer = producer;
//         this.graduationYear = graduationYear;
//         this.maxSpeed = maxSpeed;
//         this.engineV = engineV;
//         this.drive = () => {
//             console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//         }
//         this.info = () => {
//             console.log(`model - ${this.model}`)
//             console.log(`producer - ${this.producer}`)
//             console.log(`graduationYear - ${this.graduationYear}`)
//             console.log(`maxSpeed - ${this.maxSpeed}`)
//             console.log(`engineV - ${this.engineV}`)
//         this.increaseMaxSpeed = newSpeed => {this.maxSpeed = newSpeed};
//         this.changeYear = newValue => {this.graduationYear = newValue};
//         this.addDriver = driver => {this.driver = driver};
//         }
//     }
//     greeting () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
// }
// let car = new Car('Stepway', 'Renault', '2017', '190','0,9');
// console.log(car);
// car.greeting();
//
// car.info();
// car.increaseMaxSpeed(195);
// car.changeYear(2019);
// car.addDriver({name:'Alex', driving_licence:true});
// console.log(car);

//---------------------------------------------------------------------------------------

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Cinderella {
    constructor(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize
    }
}
let cinderellas = [
    new Cinderella('Anna', 19, 36),
    new Cinderella('Ilona', 22, 37),
    new Cinderella('Ivett', 21, 38),
    new Cinderella('Sarah', 22, 36),
    new Cinderella('Kate', 25, 37),
    new Cinderella('Maria', 18, 39),
    new Cinderella('Oksana', 23, 36),
    new Cinderella('Olena', 24, 37),
    new Cinderella('Eva', 26, 38),
    new Cinderella('Adriana', 17, 35),
];
console.log(cinderellas)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, bootSize) {
        this.name = name;
        this.age = age;
        this.bootSize = bootSize;
    }
}
let prince = new Prince('Shrek', 30, 35) ;
console.log(prince);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const pretty of cinderellas) {
    if (cinderellas.footSize === prince.bootSize) {
        console.log(`${pretty.name}`);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(cinderellas.find(({footSize}) => footSize === prince.bootSize));
