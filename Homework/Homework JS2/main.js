// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let num = [1, 2, 3, 4, 5];
console.log(num);
let str = ['one', 'two', 'three', 'four', 'five'];
console.log(str);
let arrd = [22, 5, 'three', true, false];
console.log(arrd);

 // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[5] = 'Good'
console.log(array);

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
		document.write('<div>Be confident and be yourself</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
		document.write('<div>Hello![i]</div>');
}
 // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20){
		document.write('<h1>Don’t worry</h1>');
		i++
}
 // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let number = 0;
while (number < 20){
		document.write('<h1>Don’t[5] worry</h1>');
		number++
}
//  // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array1 = [2, 4, 9, 8, 3, 99, 90, 1, 43, 900];
// console.log(array1);
//
//  //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr = ['ok', 'num', '9', 'key', '3', 'good', 'hug', 'run', 'number', 'word'];
// console.log(arr);
//
//  // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array6 = [false, true, '99', 'keen', 109, 'good', 5, 'run', 'number', 'word'];
// console.log(array6);
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array9 = [false, true, '99', 'keen', 109, 'good', 5, 'run', 'number', 'word'];
// for (let i = 0; i < array9.length; i++) {
// 		if (typeof array9[i] === "boolean"){
// 				console.log(array9[i]);
// 		}
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array7 = [false, true, '99', 'keen', 109, 'good', 5, 'run', 'number', 'word'];
// for (let i = 0; i < array7.length; i++) {
// 		if (typeof array7[i] === "number") {
// 				console.log(array7[i]);
// 		}
// }
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let array8 = [false, true, '99', 'keen', 109, 'good', 5, 'run', 'number', 'word'];
// for (let i = 0; i < array8.length; i++) {
// 		if (typeof array8[i] === "string") {
// 				console.log(array8[i]);
// 		}
// }
//
// // // // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let empty = [];
// empty[0] = 25;
// empty[1] = 'welcome';
// empty[2] = true;
// empty[3] = -125;
// empty[4] = false;
// empty[5] = 'ok';
// empty[6] = 0;
// empty[7] = 'good';
// empty[8] = 5;
// empty[9] = 100;
// console.log(empty);
//
//  // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
// 		console.log(i);
// 		document.write(i);
// }
// // // // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
// 		console.log(i);
// 		document.write(i);
// }
// // // // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
// 		console.log(i);
// 		document.write(i);
// }
// // // // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i=i+2) {
// 		console.log(i);
// 		document.write(i);
// }
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 1; i < 100; i=i+2) {
// 		console.log(i);
// 		document.write(i);
// }
// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// // Додатково
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr10 = [ 'a', 'b', 'c'];
// for (let i = 0; i <= 2; i++){
// 		document.write(arr10[i]);
// }
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr11 = [ 'a', 'b', 'c'];
// let n = 0;
// while (n < arr11.length) {
// 		document.write(arr11[n]);
// 		n++
// }
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// const arr12 = [ 'a', 'b', 'c'];
// for (const x of arr12) {
// 		document.write(x);
// }
//
// // зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arr13 = [2,17,13,6,22,31,45,66,100,-18];
//  // 		1. перебрати його циклом while
// let y = 0;
// while (y < arr13.length){
// 		console.log(arr13[y]);
// 		y++
// }
// // 		2. перебрати його циклом for
// for (let i = 0; i < arr13.length; i++) {
// 		console.log(arr13[i]);
// }
// // 		3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let f = 1;
// while (f < arr13.length){
// 		console.log(arr13[f]);
// 		f=f+2
// }
// // 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 1; i < arr13.length; i = i+2) {
// 		console.log(arr13[i]);
// }
//  // 5. перебрати циклом while та вивести  числа тільки парні  значення
// let m = 0;
// while (m < arr13.length){
// 		console.log(arr13[m]);
// 		m=m+2
// }
// // 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr13.length; i=i+2) {
// 		console.log(arr13[i]);
// }
