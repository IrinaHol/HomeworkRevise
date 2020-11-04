// 1)- створити функцію яка виводить масив
// let arr = [true, 'ok', 123, -90];
// function Array(arr) {
// 		console.log(arr);
// }
// Array(arr);
//
// 2)- створити функцію яка заповнює масив рандомними
// числами та виводить його. Для виведення використати попвередню
// функцію.
// function random () {
// 		return Math.random();
// }
// let number = random();
// console.log(number);

// 3) - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function number (num1, num2, num3) {
// 		let numberMin;
// 		if(num1 < num2 && num1 <= num3){
//         numberMin = num1;
// 		}
// 		if(num2 < num1 && num2 <= num3){
// 				numberMin = num2;
// 		}
// 		if(num3 < num2 && num3 <= num1){
// 				numberMin = num3;
// 		}
// 		console.log('Min:', numberMin);
// 		return numberMin;
// }
// number(2,5,11);
//
//
// //4) - створити функцію яка приймає три числа
// та виводить та повертає найбільше.
// function number2(x, y, z){
// 		if (z > y && z > x)
// 				return z;
// 		if (x > y && x > z)
// 				return x;
// 		if (y > x && y > z)
// 				return y;
// }
// let max = number2(9,1,4);
// console.log('Max:', max);
//
// 5)- створити функцію яка приймає будь-яку кількість чисел,
// повертає найменьше, а виводить найбільше
// function new1 (){
// 		let max = arguments[0];
// 		let min = arguments[0];
// 		for (const index of arguments) {
// 				if (min > index) min = index;
// 				if (max < index) max = index;
// 		}
// 		return max;
// }
// let new2 = new1(1,10,3,4,5);
// console.log(new2);

//6) - створити функцію яка виводить масив
// let arr3 = [1, 'ok', 3, 'hello'];
// function arr(arr3) {
// 		console.log(arr3);
// }
// arr(arr3);
//
// 7)- створити функцію яка повертає найбільше число з масиву
// let arr4 = [5, 4, 5, 8, 7]
// let maxnumber = (arr4) => {
// 		let max = arr4[0];
// 		for (const Element of arr4) {
// if (max < Element)
// 		max = Element
// 		}
// 		return max;
// }
// let maxnumber1 = maxnumber(arr4);
// console.log('max:', maxnumber1);
//
// 8) - створити функцію яка повертає найменьше число з масиву
// let minNamber = (array) => {
// 		let min = array[0];
// 		for (const i of array) {
// 				if (min > i) min = i;
// 		}
// 		return min;
// }
// let minNamber1 = minNamber([1,4,7,0,7,4]);
// console.log('min:', minNamber1);
//
//  9)- створити функцію яка приймає масив чисел та складає
//  значення елементів масиву та повертає його.

// function array10(arr){
// 		let sum = 0;
// 		for (const index of arr) {
// 				 sum = sum + index;
// 		}
// 		return sum;
// }
// let number = array10([1,2,4,5,77,5]);
// console.log(number);

// 10) - створити функцію яка приймає масив чисел
// та повертає середнє арифметичне його значень.
// function arr12 (array) {
// 		let result = 0;
// 		for (const index of array) {
// 				result = result + index;
// 		}
// 		return result/array.length;
// }
// let arr = arr12([4,4,2,4]);
// console.log(arr);


// 11) - Створити функцію яка приймає масив будь яких объектів, та повертає значення
// кількості об'єктів в масиві
// const users = [
// 		{
// 				"id": 1,
// 				"name": "Leanne Graham",
// 				"username": "Bret",
// 				"email": "Sincere@april.biz",
// 				"address": {
// 						"street": "Kulas Light",
// 						"suite": "Apt. 556",
// 						"city": "Gwenborough",
// 						"zipcode": "92998-3874",
// 						"geo": {
// 								"lat": "-37.3159",
// 								"lng": "81.1496"
// 						}
// 				},
// 				"phone": "1-770-736-8031 x56442",
// 				"website": "hildegard.org",
// 				"company": {
// 						"name": "Romaguera-Crona",
// 						"catchPhrase": "Multi-layered client-server neural-net",
// 						"bs": "harness real-time e-markets"
// 				}
// 		},
// 		{},
// 				{
// 				"id": 2,
// 				"name": "Ervin Howell",
// 				"username": "Antonette",
// 				"email": "Shanna@melissa.tv",
// 				"address": {
// 						"street": "Victor Plains",
// 						"suite": "Suite 879",
// 						"city": "Wisokyburgh",
// 						"zipcode": "90566-7771",
// 						"geo": {
// 								"lat": "-43.9509",
// 								"lng": "-34.4618"
// 						}
// 				},
// 				"phone": "010-692-6593 x09125",
// 				"website": "anastasia.net",
// 				"company": {
// 						"name": "Deckow-Crist",
// 						"catchPhrase": "Proactive didactic contingency",
// 						"bs": "synergize scalable supply-chains"
// 				}
// 		},
// 		{
// 				"id": 3,
// 				"name": "Clementine Bauch",
// 				"username": "Samantha",
// 				"email": "Nathan@yesenia.net",
// 				"address": {
// 						"street": "Douglas Extension",
// 						"suite": "Suite 847",
// 						"city": "McKenziehaven",
// 						"zipcode": "59590-4157",
// 						"geo": {
// 								"lat": "-68.6102",
// 								"lng": "-47.0653"
// 						}
// 				},
// 				"phone": "1-463-123-4447",
// 				"website": "ramiro.info",
// 				"company": {
// 						"name": "Romaguera-Jacobson",
// 						"catchPhrase": "Face to face bifurcated interface",
// 						"bs": "e-enable strategic applications"
// 				}
// 		},
// 		{
// 				"id": 4,
// 				"name": "Patricia Lebsack",
// 				"username": "Karianne",
// 				"email": "Julianne.OConner@kory.org",
// 				"address": {
// 						"street": "Hoeger Mall",
// 						"suite": "Apt. 692",
// 						"city": "South Elvis",
// 						"zipcode": "53919-4257",
// 						"geo": {
// 								"lat": "29.4572",
// 								"lng": "-164.2990"
// 						}
// 				},
// 				"phone": "493-170-9623 x156",
// 				"website": "kale.biz",
// 				"company": {
// 						"name": "Robel-Corkery",
// 						"catchPhrase": "Multi-tiered zero tolerance productivity",
// 						"bs": "transition cutting-edge web services"
// 				}
// 		},
// 		{
// 				"id": 5,
// 				"name": "Chelsey Dietrich",
// 				"username": "Kamren",
// 				"email": "Lucio_Hettinger@annie.ca",
// 				"address": {
// 						"street": "Skiles Walks",
// 						"suite": "Suite 351",
// 						"city": "Roscoeview",
// 						"zipcode": "33263",
// 						"geo": {
// 								"lat": "-31.8129",
// 								"lng": "62.5342"
// 						}
// 				},
// 				"phone": "(254)954-1289",
// 				"website": "demarco.info",
// 				"company": {
// 						"name": "Keebler LLC",
// 						"catchPhrase": "User-centric fault-tolerant solution",
// 						"bs": "revolutionize end-to-end systems"
// 				}
// 		},
// 		{
// 				"id": 6,
// 				"name": "Mrs. Dennis Schulist",
// 				"username": "Leopoldo_Corkery",
// 				"email": "Karley_Dach@jasper.info",
// 				"address": {
// 						"street": "Norberto Crossing",
// 						"suite": "Apt. 950",
// 						"city": "South Christy",
// 						"zipcode": "23505-1337",
// 						"geo": {
// 								"lat": "-71.4197",
// 								"lng": "71.7478"
// 						}
// 				},
// 				"phone": "1-477-935-8478 x6430",
// 				"website": "ola.org",
// 				"company": {
// 						"name": "Considine-Lockman",
// 						"catchPhrase": "Synchronised bottom-line interface",
// 						"bs": "e-enable innovative applications"
// 				}
// 		},
// 		{
// 				"id": 7,
// 				"name": "Kurtis Weissnat",
// 				"username": "Elwyn.Skiles",
// 				"email": "Telly.Hoeger@billy.biz",
// 				"address": {
// 						"street": "Rex Trail",
// 						"suite": "Suite 280",
// 						"city": "Howemouth",
// 						"zipcode": "58804-1099",
// 						"geo": {
// 								"lat": "24.8918",
// 								"lng": "21.8984"
// 						}
// 				},
// 				"phone": "210.067.6132",
// 				"website": "elvis.io",
// 				"company": {
// 						"name": "Johns Group",
// 						"catchPhrase": "Configurable multimedia task-force",
// 						"bs": "generate enterprise e-tailers"
// 				}
// 		},
// 		{
// 				"id": 8,
// 				"name": "Nicholas Runolfsdottir V",
// 				"username": "Maxime_Nienow",
// 				"email": "Sherwood@rosamond.me",
// 				"address": {
// 						"street": "Ellsworth Summit",
// 						"suite": "Suite 729",
// 						"city": "Aliyaview",
// 						"zipcode": "45169",
// 						"geo": {
// 								"lat": "-14.3990",
// 								"lng": "-120.7677"
// 						}
// 				},
// 				"phone": "586.493.6943 x140",
// 				"website": "jacynthe.com",
// 				"company": {
// 						"name": "Abernathy Group",
// 						"catchPhrase": "Implemented secondary concept",
// 						"bs": "e-enable extensible e-tailers"
// 				}
// 		},
// 		{
// 				"id": 9,
// 				"name": "Glenna Reichert",
// 				"username": "Delphine",
// 				"email": "Chaim_McDermott@dana.io",
// 				"address": {
// 						"street": "Dayna Park",
// 						"suite": "Suite 449",
// 						"city": "Bartholomebury",
// 						"zipcode": "76495-3109",
// 						"geo": {
// 								"lat": "24.6463",
// 								"lng": "-168.8889"
// 						}
// 				},
// 				"phone": "(775)976-6794 x41206",
// 				"website": "conrad.com",
// 				"company": {
// 						"name": "Yost and Sons",
// 						"catchPhrase": "Switchable contextually-based project",
// 						"bs": "aggregate real-time technologies"
// 				}
// 		},
// 		{
// 				"id": 10,
// 				"name": "Clementina DuBuque",
// 				"username": "Moriah.Stanton",
// 				"email": "Rey.Padberg@karina.biz",
// 				"address": {
// 						"street": "Kattie Turnpike",
// 						"suite": "Suite 198",
// 						"city": "Lebsackbury",
// 						"zipcode": "31428-2261",
// 						"geo": {
// 								"lat": "-38.2386",
// 								"lng": "57.2232"
// 						}
// 				},
// 				"phone": "024-648-3804",
// 				"website": "ambrose.net",
// 				"company": {
// 						"name": "Hoeger LLC",
// 						"catchPhrase": "Centralized empowering task-force",
// 						"bs": "target end-to-end models"
// 				}
// 		}
// ];
// 11) - Створити функцію яка приймає масив будь яких объектів, та повертає значення
// кількості об'єктів в масиві
// function array (users) {
// 		let result = 0;
// 		for (const number of users) {
// 				if (typeof number === 'object'){
// 				result++;
// 				}
// 		}
// 		return result;
// }
// let array1 = array(users);
// console.log(array1);
//
// 12)- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function array (users) {
// 		let sum = 0;
// 		for (const element of users) {
// 				if (typeof element  === 'object'){
// 						for (const user in element) {
// 								sum++;
// 						}
// 				}
// 		}
// 		return sum;
// }
// let array1 = array(users);
// console.log(array1);
//
// 13)- створити функцію  яка скаладає значення
// елементів з однаковими індексами  та повертає новий результуючий масив.
// function new1 (arr1, arr2){
// let result = [];
// 		for (let i = 0; i < arr1.length; i++) {
// 						result.push(arr1[i] + arr2[i])
// 		}
// 		return result;
// }
// let new3 = new1([1,2,3,4],	[2,3,4,5]);
// console.log(new3);
// 		Приклад
// 		[1,2,3,4]
// 		[2,3,4,5]
// результат
// 		[3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// Не розумію!


//14) - *** створити функцію яка буде переносити елементи з
// значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// function main(arr){
// 		let arr1 = [];
// 		let arr2 = [];
// 		for (const i of arr) {
// 				if (i === 0){
// 						arr1.push(0);
// 				}
// 				else{
// 						arr2.push(i);
// 				}
//
// 		}
// 		return arr2.concat(arr1);
// }
// let main1 = main([0,0,3,0,5,6]);
// console.log(main1);

// 15)Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
//
// function body (text){
// 		let div = document.createElement('div');
// 		div.innerText = text || "Hello owu"
// 		document.body.appendChild(div);
// }
// body();
//
// 16)- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function body1 (typeElm, text){
// 		let elem = document.createElement(typeElm);
// 		elem.innerText = text || "Hello owu"
// 		document.body.appendChild(elem);
// }
// body1('div', 'Hello owu');
//
// 17) - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати
// список цих автомобілів.
// let cars = ["Saab", "Volvo", "BMW"];
// function arr(cars) {
// 		let id = document.getElementById('list');
// 		let ul = document.createElement('ul');
// 		id.appendChild(ul);
//
// 		for (let i = 0; i<cars.length; i++) {
// 				let li = document.createElement('li');
// 				ul.appendChild(li);
// 				li.innerText = `${cars[i]}`;
//
// 		}
// 		id.appendChild(ul);
// }
// 		arr(cars);

// 18) Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви
		// отримали. Всі властивості авто в обному блоці
// let cars = ["Saab", "Volvo", "BMW"];
// function arr(cars) {
// 		let id = document.getElementById('list');
//
// 		for (let i = 0; i<cars.length; i++) {
// 				let div = document.createElement('div');
// 				div.innerText = `${cars[i]}`;
// 				id.appendChild(div);
// 		}
// }
// arr(cars);

// 19) - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати
// список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// 		let user = [
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
// function arr(user) {
// 		let id = document.getElementById('list');
//
// 		for (let i = 0; i < user.length; i++) {
// 				let div = document.createElement('div');
// 				id.appendChild(div);
// 				let box1 = document.createElement('div');
// 				let box2 = document.createElement('div');
// 				let box3 = document.createElement('div');
// 				box1.innerText = `${user[i].name}`;
// 				box2.innerText = `${user[i].age}`;
// 				box3.innerText = `${user[i].status}`;
// 				div.appendChild(box1);
// 				div.appendChild(box2);
// 				div.appendChild(box3);
// 		}
// }
// arr(user);

// (на основі минулого ДЗ)
// 20) **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з
// відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
            //let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30,
// status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine',
// city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:
// for (const user1 of usersWithId) {
// 		for (const user2 of citiesWithId) {
// 				if (user1.id === user2.user_id){
// 						user1.address = user2;
// 				}
// 		}
// }
// console.log(usersWithId);
// function array (usersWithId, citiesWithId) {
// 		let newArr = [];
// 		for (const user1 of usersWithId) {
// 		for (const user2 of citiesWithId) {
// 				if (user1.id === user2.user_id){
// 						user1.address = user2;
// 				}
// 		}
//
// }
// 		newArr.push(usersWithId);
// 		return newArr;
// }
// let array1 = array(usersWithId, citiesWithId);
// console.log(array1);

// 22) ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// let rules = [
// 		{
// 				title: 'Первое правило Бойцовского клуба.',
// 				body: 'Никому не рассказывать о Бойцовском клубе.'
// 		},
// 		{
// 				title: 'Второе правило Бойцовского клуба.',
// 				body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 		},
// 		{
// 				title: 'Третье правило Бойцовского клуба.',
// 				body: 'В схватке участвуют только двое.'
// 		},
// 		{
// 				title: 'Четвертое правило Бойцовского клуба.',
// 				body: 'Не более одного поединка за один раз.'
// 		},
// 		{
// 				title: 'Пятое правило Бойцовского клуба.',
// 				body: 'Бойцы сражаются без обуви и голые по пояс.'
// 		},
// 		{
// 				title: 'Шестое правило Бойцовского клуба.',
// 				body: 'Поединок продолжается столько, сколько потребуется.'
// 		},
// 		{
// 				title: 'Седьмое правило Бойцовского клуба.',
// 				body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 		},
// 		{
// 				title: 'Восьмое и последнее правило Бойцовского клуба.',
// 				body: 'Новичок обязан принять бой.'
// 		},
//
// ];
// function rulesArr() {
// 		let div = document.createElement('div');
// 		for (const element of rules) {
// 				let box = document.createElement('div');
// 				let block1 = document.createElement('h2');
// 				block1.innerText = `${element.title}`;
// 				let block2 = document.createElement('p');
// 				block2.innerText = `${element.body}`;
// 				box.appendChild(block1);
// 				box.appendChild(block2);
// 				div.appendChild(box);
// 		}
// 		document.body.appendChild(div);
// }
// rulesArr(rules);
//
// 		Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html




// ===========додаткове від віктора========
// 1) Точная степень двойки.
// 		Дано натуральное число N.
// 		Выведите слово YES, если число N является точной степенью двойки,
// 		или слово NO в противном случае.
// 		Операцией возведения в степень пользоваться нельзя!
//
// 		2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій
//
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// 		[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========