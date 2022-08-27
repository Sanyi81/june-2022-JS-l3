// - є масив

// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

// let target = document.getElementsByClassName('target')[0];
// for (const simpson of simpsons) {
//     let div = document.createElement('div');
//     div.classList.add('member');
//
//     let simpsonTitle = document.createElement('h2');
//     simpsonTitle.innerText = simpson.name + " " + simpson.surname + ", age " + simpson.age;
//     div.appendChild(simpsonTitle);
//
//     let simpsonInfo = document.createElement('h3');
//     simpsonInfo.innerText = simpson.info;
//     div.appendChild(simpsonInfo);
//
//     let simpsonImg = document.createElement('img');
//     simpsonImg.src = simpson.photo;
//     div.appendChild(simpsonImg);
//
//     target.appendChild(div);
// }

//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

//-------------------------------------------------------------------------

// Цикл в циклі
// - Є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png

// for (const course of coursesArray) {
//     let div = document.createElement('div');
//
//     let titleElement = document.createElement('h2');
//     titleElement.innerText = course.title;
//     div.appendChild(titleElement);
//
//     let monthElement = document.createElement('h3');
//     monthElement.innerText = course.monthDuration;
//     div.appendChild(monthElement);
//
//     let hourElement = document.createElement('h3');
//     hourElement.innerText = course.hourDuration;
//     div.appendChild(hourElement);
//
//     let moduleElement = document.createElement('ul');
//
//     for (const module of course.modules) {
//         let moduleList = document.createElement('li');
//         moduleList.innerText = module;
//         div.appendChild(moduleList);
//     }
//
//     document.body.appendChild(div);
//
// }

// -----------------------------------------------------------------------------------------

//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let block = document.getElementsByClassName('block')[0];
//     let div = document.createElement('div');
//     div.classList.add('wrap', 'collapse', 'alpha', 'beta');
//     div.innerHTML = '<b>Hello people</b>';
//     div.style.fontSize = '40px';
//     div.style.background = 'yellow';
//     div.style.color = 'orange';
//
// document.body.appendChild(div);
//
// document.body.appendChild(div.cloneNode(true));

// -----------------------------------------------------------------------------------------

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main','Products','About us','Contacts'];
    let menu = document.getElementsByClassName('menu')[0];
for (const string of array) {
    let stringElement = document.createElement('li');
    stringElement.innerText = string;
    menu.appendChild(stringElement);

}

// -----------------------------------------------------------------------------------------

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const block of coursesAndDurationArray) {
//     let div = document.createElement('div');
//
//     let titleElem = document.createElement('h2');
//     titleElem.innerText = block.title;
//     div.appendChild(titleElem);
//
//     let monthElem = document.createElement('h3');
//     monthElem.innerText = block.monthDuration;
//     div.appendChild(monthElem);
//
//     document.body.appendChild(div);
// }

// -----------------------------------------------------------------------------------------

// - Є масив

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// for (const block of coursesAndDurationArray) {
//     let div = document.createElement('div');
//     div.classList.add('item');
//
//     let h1 = document.createElement('h1');
//     h1.innerText = block.title;
//     h1.classList.add('heading')
//     div.appendChild(h1);
//
//     let p = document.createElement('p');
//     p.innerText = block.monthDuration;
//     p.classList.add('description')
//     div.appendChild(p);
//
//     document.body.appendChild(div);
// }

// -----------------------------------------------------------------------------------------
//
//  - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let div = document.createElement('div');
// let p = document.createElement('p');
// p.innerText='This button clears the element';
// p.id='text';
// div.appendChild(p);
//
// let button = document.createElement('button');
// button.innerText='Press';
// div.appendChild(button);
//
// button.addEventListener('click',() => {
//     p.classList.toggle('cut');
// });
//
// document.body.appendChild(div);

// -----------------------------------------------------------------------------------------
//
//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту
//     та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// -----------------------------------------------------------------------------------------
//
// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)