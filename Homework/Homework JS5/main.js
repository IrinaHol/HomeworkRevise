// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// 	[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}]
// let newArr = []
// let fun = (arr) => {
// 	arr.forEach(value => {
// 	 const a = Object.values(value)
// 		newArr.push(a);
//
// 		return a;
// 	})
// }
// fun(arr)
// let ddd = newArr.flat(8)
// console.log(ddd);

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// 	EXAMPLE:
// [1,2,3,4]
// 	[2,3,4,5]
// результат
// 	[3,5,7,9]
// const arr = [1,2,3,4]
// const arr2 = [2,3,4,5]
// const newD = []
// function sss (arr, arr2) {
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr2.length; j++) {
// 			if (i === j) {
// 				const sum = (arr[i] + arr2[j])
// 				newD.push(sum)
// 			}
// 		}
//
// 	}
//
// }
// sss(arr, arr2)
// console.log(newD)

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// 	Двожина масиву від 2 до 100
// EXAMPLE:
// 	[1,0,6,0,3] => [1,6,3,0,0]
// 	[0,1,2,3,4] => [1,2,3,4,0]
// 	[0,0,1,0]   =>

// const arr = [1, 0, 0, 7, 0]
//
// let fun = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === 0) {
// 			arr.splice(i, 1)
// 			arr.push(0)
// 		}
// 	}
//
// }
// fun(arr)
// console.log(arr)


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//  let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// const ffff = (name1) => {
// 	const n1 = name1.trim().replace(/\s+/g, ' ')
// 	console.log(n1)
// }
// ffff(n1)

//
// class Human {
// 	constructor(width, height, color, name) {
// 		this._width = width;
// 		this._height = height;
// 		this._color = color;
// 		this.name = name;
// 	}
//
// 	greeting() {
// 		console.log('Hello ' + this.name)
// 	}
// }
//
// class Developer extends Human {
// 	constructor(width, height, color, name, skill) {
// 		super(width, height, color, name);
// 		this.skill = skill;
// 	}
// coding() {
// 	console.log('I like coding');
// }
// }
//
// const student = new Human('160', 23, 'red', 'Ivan');
// const newStudent = new Developer('222', 124, 'black', 'Olia', 'Js')
//
// student.greeting();
// newStudent.greeting()
// newStudent.coding();
// console.log(student)
// console.log(newStudent)
//
//
// class Big extends Developer {
// 	constructor() {
// 		super();
// 	}
// }

// console.time('xxx')
// const car = {
// 	model: 'xxx',
// 	year: 1900,
// 	price: 2000,
// 	name: {
// 		lll: 123
// 	}
// }
//
// const girl = {
// 	name: 'Kary',
// 	skill: 'Js'
// }
//
// // console.log(Object.assign({},car, girl));
// const fff = Object.assign({},car);
// fff.name.lll= '1200'
// console.log(fff)
// console.log(car);
// console.error(car);
// console.dir("dkjshfkj");
// console.timeEnd('xxx')

// function recursator (arr, index) {
// 	if (index >= arr.length){
// 		return;
// 	}
// 	console.log(arr[index]);
//
//
// 	recursator(arr, ++index);
// 	return;
// }
// recursator([1,2,3,4,5],0)
//
// function fib (current, previous) {
// 	if (current > 987) {
// 		return;
// 	}
// 	const sum = previous + current
// 	console.log(sum)
//
// 	fib(sum, current)
// }
//
// fib(1,0)

const fc = [1,1,2,7, 2,2,2];
const freq = {}

fc.forEach(value => {
	freq[value] ? freq[value]++ : freq[value] = 1
})



let keys = Object.keys(freq);

keys.forEach(value => {
	if (freq[value] > 1) {
		delete freq[value]
	}

})

console.log(freq)
