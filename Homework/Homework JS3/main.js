// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

// let obj = {
// 		dog: {
// 				name: 'Popy',
// 				age: 8,
// 				breed: 'boxer',
// 		},
// 		user: {
// 				name: 'Oleg',
// 				age: 10,
// 				job: 'teacher',
// 		},
// 		car: {
// 				brand: 'Opel',
// 				year: 2010,
// 				color: 'white',
// 		},
// 		flat: {
// 				price: 10000,
// 				rooms: 3,
// 				floor: 5,
// 		},
// 		book: {
// 				name: 'Harry potter',
// 				year: 2020,
// 				pages: 500,
// 		}
// }
// console.log(obj);
// // -- Створити масив та вивести його в консоль:
// // 		- з 5 собак
// const dogs = ['Labrador', 'Toller', 'Dingo', 'Boxer', 'Poodle'];
// console.log(dogs);
// // - 3 5 людей
// const people = ['Ira', 'Max', 'Nadia', 'Nik', 'Paul'];
// console.log(people);
// // - з 5 автомобілів
// const cars = ['Opel', 'Honda', 'BMW', 'Nissan', 'Volvo'];
// console.log(cars);
// // -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// // - будинок
// // - водій
// // - іграшку
// // - стіл
// // - сумка
// //
// let obj1 = {
// 		house: {
// 				size: 'big',
// 				color: 'red',
// 				price: 1000000,
// 				number_of_floors: 5},
// 		driver: 'Igor',
// 		toy: 'Barby',
// 		table: 'small',
// 		bag: ['blue', 'big', 'expencive']}
//  console.log(obj1);


// // Дан массив:
// 		let users = [
// 				{name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true}
// 		];
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
// for (const user1 of users) {
// 		if (user1.name === 'andrey') {
// 				console.log(user1.status);
// 		}
// }

// // - статус Максима
// for (const user2 of users) {
// 		if (user2.name === 'max') {
// 				console.log(user2.status);
// 		}
// }

// // - ім'я передостаннього об'єкту
// console.log(users[9].name);
// // - ім'я третього об'єкта
// console.log(users[2].name);
// // - вік Олега

// for (const user3 of users) {
// 		if (user3.name === 'oleg') {
// 				console.log(user3.age);
// 		}
// }

// // - вік Олі
//  for (const user4 of users) {
// 		if (user4.name === 'olya') {
// 				console.log(user4.age);
// 		}
// }

// // - вік + ім'я 5го об'єкта
// for (const user5 of users) {
// 		if (user5 === users[4]){
// 				console.log(user5.age, user5.name);
// 		}
// }
// // - вік + сатус Анни
// for (const user6 of users) {
// 		if (user6.name === 'anya'){
// 				console.log(user6.age, user6.status);
// 		}
// }

// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!
//
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//
// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

// // - отримує текст з параграфа з id "content"
// let element = document.getElementById('content');
// // - отримує текст з блоку з id "rules"
// let rules = document.getElementById('rules');
// // - замініть текст параграфа з id 'content' на будь-який інший
// element.innerText = 'Hello';
// // - замініть текст параграфа з id 'rules' на будь-який інший
// rules.innerText = 'Welcome';
// // - змініть кожному елементу колір фону на червоний
// element.style.backgroundColor = 'red';
// rules.style.backgroundColor = 'red';
// // - змініть кожному елементу колір тексту на синій
// element.style.color = 'blue';
// rules.style.color = 'blue';
// // - отримати весь список класів елемента з id=rules і вивести їх в console.log
// 	let elm = document.getElementsByClassName('fc bp');
// console.log(elm);
// // - отримати всі елементи з класом fc_rules
// let fc_rules = document.getElementsByClassName('fc_rules');
// // - поміняти колір тексту у всіх елементів fc_rules на червоний
// for (const i of fc_rules) {
// 		i.style.color = 'red';
// }

// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
// let person = {
// 		name: 'Ira',
// 		age: 25,
// 		city: 'Lviv',
// }
//
// let contacts = {
// 		number: '0994938849824',
// 		street: 'Shevchenko',
// 		flat: 5,
// }
// let friend = {
// 		gender: 'male',
// 		interest: 'music',
// 		hooby: 'drawing',
// }
// let car = {
// 		brand: 'Nissan',
// 		year: '2015',
// 		price: 5000,
// }
// let job = {
// 		company: 'Nestle',
// 		position: 'boss',
// 		salary: 10000,
//
// }
// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// let bestfriend = { name: 'Olia', characteristic : ['polite', 'honest'] , contacts: {number: '093673647', street: 'Svobody'} };
// let table = {material: 'wood', parameters: {widh: '100cm', height: '100cm', length: '150cm'}, design : ['rounded',
// 		'shiny', 'yellow'] };
// let film = {genre: 'action', description: ['fascinating', 'impressive',] , director: {surname: 'Spilberg' } };
// let phone = {model: 'Sumsung', properties: ['green', 'bigscreen' ], memory: {gigabytes: 32} }
// let box = {weight: '30', contents: ['pens', 'pencils', 'notebooks'], size: {side: '100'}};
// - При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (const personKey in person) {
// 		console.log(personKey);
// }
// for (const contactsKey in contacts) {
// 		console.log(contactsKey);
// }
// for (const friendKey in friend) {
// 		console.log(friendKey);
//
// }
// for (const carKey in car) {
// 		console.log(carKey);
// }
// for (const jobKey in job) {
// 		console.log(jobKey);
// }
// for (const bestfriendKey in bestfriend) {
// 		console.log(bestfriend);
// }
// for (const tableKey in table) {
// 		console.log(tableKey);
// }
// for (const filmKey in film) {
// 		console.log(filmKey);
// }
// for (const phoneKey in phone) {
// 		console.log(phoneKey);
// }
// for (const boxKey in box) {
// 		console.log(boxKey);
// }
// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let objkeys = Object.keys(person);
// console.log(objkeys);
// let objkeys1 = Object.keys(contacts);
// console.log(objkeys1);
// let objkeys2 = Object.keys(friend);
// console.log(objkeys2);
// let objkeys3 = Object.keys(car);
// console.log(objkeys3);
// let objkeys4 = Object.keys(job);
// console.log(objkeys4);
// let objkeys5 = Object.keys(bestfriend);
// console.log(objkeys5);
// let objkeys6 = Object.keys(table);
// console.log(objkeys6);
// let objkeys7 = Object.keys(film);
// console.log(objkeys7);
// let objkeys8 = Object.keys(phone);
// console.log(objkeys8);
// let objkeys9 = Object.keys(box);
// console.log(objkeys9);
//5) - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
// (Значаения полей могу быть выдуманными)
// let cars = [{brand: 'Shkoda', model: 'fabia', year: 2010, color: 'white'},  {brand: 'Opel', price: 6500, motor: '1,6'}, {brand: 'Ford', body: 'sedan', weight: '1000kg'}];
// // - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let city = [{city: {name: 'Kiev', population: '5milion',country: 'Ukraine'}},{city: {name: 'Vienna', population: '2 milion', country: 'Austria'}}];
// // - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
// let cars1 = [{car1: {model: 'fabia', year: 2010, color: 'red', driver: {name: 'Anton', age: 30, sex: 'male', experience: '7'}}}];
// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// let i = 0;
// while (i < cars.length){
// 		console.log(cars[i]);
// 		i++;
// }
// let i1 = 0;
// while (i1 < city.length){
// 		console.log(city[i1]);
// 		i1++;
// }
// let i2 = 0;
// while (i2 < cars1.length){
// 		console.log(cars1[i2]);
// 		i2++;
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// for (let j = 0; j < cars.length; j++) {
// 		console.log(cars[j])
// }
// for (let j = 0; j < city.length; j++) {
// 		console.log(city[j])
// }
// for (let j = 0; j < cars1.length; j++) {
// 		console.log(cars1[j])
// }
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for (const carElement of cars) {
// 		console.log(carElement);
// }
// for (const cityElement of city) {
// 		console.log(cityElement);
// }
// for (const carsElement of cars1) {
// 		console.log(carsElement);
// }
// 	- взять объекты из задания 1 и превратить каждый в json.
// let s = JSON.stringify(person);
// console.log(s);
// let p = JSON.stringify(contacts);
// console.log(p);
// let h = JSON.stringify(friend);
// console.log(h);
// let l = JSON.stringify(car);
// console.log(l);
// let k = JSON.stringify(job);
// console.log(k);
// // - взять json из задания 11 и превратить их обратно в объекты.
// let ss = JSON.parse(s);
// console.log(ss);
// let pp = JSON.parse(p);
// console.log(pp);
// let hh = JSON.parse(h);
// console.log(hh);
// let ll = JSON.parse(l);
// console.log(ll);
// let kk = JSON.parse(k);
// console.log(kk);
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// for (let i = 0; i < cars.length; i++){
// 		let ddd = JSON.stringify(cars[i]);
// 		console.log(ddd);
// }
// // - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// let z = 0;
// while (z < city.length) {
// 		let a = JSON.stringify(city[z]);
// 		console.log(a);
// 		z++
// }
// // - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// let cars1arr1 = [];
// for (let i = 0; i < cars1.length; i++){
// 		let cars1arr = JSON.stringify(cars1[i]);
// 		cars1arr1.push(cars1arr);
// 		console.log(cars1arr1);
// }
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// let users10 = [{name: 'Jason', age: 23, skills: ['teamwork', 'hard-working']},{name: 'Ron', age: 35, skills: ['communication', 'friendly']}]
//
// for (const users of users10){
// 		for (const skill of users.skills){
// 				console.log(skill);
// 		}
// }

// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив
// let users10 = [{name: 'Jason', age: 23, skills: ['teamwork', 'hard-working']},{name: 'Ron', age: 35, skills: ['communication', 'friendly']}]
// let newarr = [];
// for (const users of users10){
// 		for (const skill of users.skills){
// 				console.log(skill);
// 				newarr.push(skill);
// 		}
// }
// console.log(newarr)

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users11 = [{name: 'Vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'Petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];
// for (const user of users11) {
// 		console.log(user);
// 		for (const g of user.skills) {
// 				console.log(g);
// 		}
// }
//
//

//
// //
// let users = [{
// 		name: 'vasya',
// 		age: 31,
// 		status: false,
// 		address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
// 		name: 'petya',
// 		age: 30,
// 		status: true,
// 		address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
// 		name: 'kolya',
// 		age: 29,
// 		status: true,
// 		address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
// 		name: 'olya',
// 		age: 28,
// 		status: false,
// 		address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
// 		name: 'max',
// 		age: 30,
// 		status: true,
// 		address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
// 		name: 'anya',
// 		age: 31,
// 		status: false,
// 		address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
// 		name: 'oleg',
// 		age: 28,
// 		status: false,
// 		address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
// 		name: 'andrey',
// 		age: 29,
// 		status: true,
// 		address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
// 		name: 'masha',
// 		age: 30,
// 		status: true,
// 		address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
// 		name: 'olya',
// 		age: 31,
// 		status: false,
// 		address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
// 		name: 'max',
// 		age: 31,
// 		status: true,
// 		address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let res = [];
// for (const user of users){
// 		res.push(user.address)
// }
// console.log(res);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users){
// 		let block2 = document.createElement('div');
// 		block2.innerText = `${user.name} ${user.age} ${user.status}`;
// 		document.body.appendChild(block2);
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users){
// 		let block3 = document.createElement('div');
// 		let p1 = document.createElement('p');
// 		let p2 = document.createElement('p');
// 		let p3 = document.createElement('p');
// 		p1.innerText = `${user.name}`;
// 		p2.innerText = `${user.age}`;
// 		p3.innerText = `${user.status}`;
// 		block3.appendChild(p1);
// 		block3.appendChild(p2);
// 		block3.appendChild(p3);
// document.body.appendChild(block3);
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users){
//    let block3 = document.createElement('div');
// 		let p1 = document.createElement('p');
// 		let p2 = document.createElement('p');
// 		let p3 = document.createElement('p');
//    let div = document.createElement('div');
//
//
// 		for (const i in user.address) {
// let addr = document.createElement('div');
// addr.innerHTML = user.address[i];
// div.appendChild(addr);
// 		}
// 		p1.innerText = `${user.name}`;
//  		p2.innerText = `${user.age}`;
//  		p3.innerText = `${user.status}`;
//
// 		block3.appendChild(p1);
// 		block3.appendChild(p2);
// 		block3.appendChild(p3);
// 		block3.appendChild(div);
// 		document.body.appendChild(block3);
// }
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true},
// {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
// let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city:
// 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// // 		Записати цей об'єкт в новий масив
// // Частковий приклад реультату:
// // 		let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]
// for (const users of usersWithId) {
// 		for (const cities of citiesWithId ) {
// 				if (users.id === cities.user_id){
// 						users.address = cities;
// 				}
// 		}
// 		console.log(usersWithId);
//
// }

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// let block = document.getElementById('block');
// let text = document.getElementsByClassName('text');
// let h2 = document.getElementsByTagName('h2');
// - змінити цей текст використовуючи селектори id, class,  tag
// block.innerText = 'Welcome!';
// for (const textElement of text) {
// 		textElement.innerText = 'Try do everything';
// }
// for (const texth2 of h2) {
// 		texth2.innerText = 'Never give up!';
// }
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// block.style.width = '200px';
// block.style.height = '300px';
// for (const textElement of text) {
// 		textElement.style.width = '400px';
// 		textElement.style.height = '400px';
// }
// for (const texth2 of h2) {
// 		texth2.style.width = '200px';
// 		texth2.style.height = '200px';
// }
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// let table1 = document.createElement('table')
// let tr = document.createElement('tr');
// let td1 = document.createElement('td');
// let td2 = document.createElement('td');
// let td3 = document.createElement('td');
// tr.appendChild(td1);
// tr.appendChild(td2);
// tr.appendChild(td3);
// table1.appendChild(tr);
// document.body.appendChild(table1);
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// let table2 = document.createElement('table')
// for (let i=0; i<10; i++){
// 		let tr = document.createElement('tr');
// 		for (let x=0; x<3; x++)	{
// 				let td = document.createElement('td');
// 				tr.appendChild(td);
// 		}
// 		table2.appendChild(tr);
// }
//
// document.body.appendChild(table2);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// let table3 = document.createElement('table')
// for (let i=0; i<10; i++){
// 		let tr = document.createElement('tr');
// 		for (let x=0; x<5; x++)	{
// 				let td = document.createElement('td');
// 				tr.appendChild(td);
// 		}
// 		table3.appendChild(tr);
// }
//
// document.body.appendChild(table3);
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// let n = +prompt('Число рядків', 5);
// let m = +prompt('Число ячейок', 4);
// let table4 = document.createElement('table')
// for (let i=0; i<5; i++){
// 		let tr = document.createElement('tr');
// 		for (let x=0; x<4; x++)	{
// 				let td = document.createElement('td');
// 				tr.appendChild(td);
// 		}
// 		table3.appendChild(tr);
// }
// document.body.appendChild(table4);


