// - создать массив с 20 числами.
 	//	let arr = [2, 55, 7, -5, 1, 55, 0, 1022, 9, 6, -44, 100, 555, 3, 333, 1, 2, 44, -5, -90, 20]
// -- при помощи метода sort и колбека  отсортировать массив.
// let sort = arr.sort((a , b)  => {
// 	return a-b
// })
// console.log(sort);
// let sort = arr.sort((a , b)  => a-b
// )
// console.log(sort);
// -- при помощи метода sort и колбека отсортировать массив в
// ниспадающем напралении.
// let sort1 = arr.sort((a , b)  => b-a
// })
// console.log(sort1);

// -- при помощи filter получить числа кратные 3
// let filter = arr.filter((value) => value%3 === 0 && value !==0
// )
//  console.log(filter);
// -- при помощи filter получить числа кратные 10
// let filter1 = arr.filter((value) =>  {
// 		if (value%10 === 0){
// 				return value
// 		}
// })
// console.log(filter1);
// -- перебрать (проитерировать) массив при помощи foreach()
// arr.forEach((value) => console.log(value);
//
// )

// -- перебрать массив при помощи map() и получить новый массив
// в котором все значения будут в 3 раза больше
// let a = arr.map((value) =>  value*3 )
//
// console.log(a);
// console.log(arr);

//- создать массив со словами на 15-20 элементов.
// let str = ['me', 'winter', 'dog', 'cat', 'age', 'irina', 'olegg',
// 		'bred', 'star', 'key', 'olia', 'header','milk', 'big', 'small']
//-- отсортировать его по алфавиту в восходящем порядке.
// let sort = str.sort((a,b) => a>b ? -1 : 1
// )
// console.log(sort);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let sort1 = str.sort((a,b) =>{
// 		if (a < b) {
// 				return -1
// 		}
// })
// console.log(sort1);
// -- отфильтровать слова длиной менее 4х символов
// let filter = str.filter(value => value.length < 4)
// console.log(filter);
// -- перебрать массив при помощи map() и получить новый
// массив в котором все значения будут со знаком "!" в конце
// let map = str.map((value) =>{
// 		value += '!'
// 		return value
// })
// console.log(map);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//  		let users = [ {name: 'vasya', age: 31, status: false},
// 				{name: 'petya', age: 30, status: true},
// 				{name: 'kolya', age: 29, status: true},
// 				{name: 'olya', age: 28, status: false},
// 				{name: 'max', age: 30, status: true},
// 				{name: 'anya', age: 31, status: false},
// 				{name: 'oleg', age: 28, status: false},
// 				{name: 'andrey', age: 29, status: true},
// 				{name: 'masha', age: 30, status: true},
// 				{name: 'olya', age: 31, status: false},
// 				{name: 'max', age: 31, status: true} ];
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// let age = users.sort((a, b)=> a.age - b.age)
// console.log(age);

// let age1 = users.sort((a, b)=> b.age - a.age)
// console.log(age1);
// - відсортувати його за кількістю знаків в імені
//  let letter = users.sort((a, b)=> b.name.length - a.name.length)
//  console.log(letter);
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let id = users.map((value, index) => {
// 		value.id = index;
// 		return value
//  		}
//  )
// console.log(id);
// console.log(users);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// -- наисать функцию калькулятора с 3мя числами и колбеком










