//Завдання1

let a = 'hello';
console.log(a);
alert(a);
document.write(a);

let b = 'owu';
console.log(b);
alert(b);
document.write(b);

let c = 'com';
console.log(c);
alert(c);
document.write(c);

let d = 'ua';
console.log(d);
alert(d);
document.write(d);

let e = 1;
console.log(e);
alert(e);
document.write(e);

let f = 10;
console.log(f);
alert(f);
document.write(f);

let g = -999;
console.log(g);
alert(g);
document.write(g);

let h = 1234;
console.log(h);
alert(h);
document.write(h);

let i = 3.14;
console.log(i);
alert(i);
document.write(i);

let j = 2.7;
console.log(j);
alert(j);
document.write(j);

let k = 16;
console.log(k);
alert(k);
document.write(k);

let l = true;
console.log(l);
alert(l);
document.write(l);

let m = false;
console.log(m);
alert(m);
document.write(m);

//Завдання2

a = 0.5;
console.log(a);
alert(a);
document.write('a');

b = 'ok';
console.log(b);
alert(b);
document.write('b');

c = 1;
console.log(c);
alert(c);
document.write('c');

d = true;
console.log(d);
alert(d);
document.write('d');

e = false;
console.log(e);
alert(e);
document.write('e');

f = 100;
console.log(f);
alert(f);
document.write('f');

g = 999 + 1;
console.log(g);
alert(g);
document.write('g');

h = 'box';
console.log(h);
alert(h);
document.write('h');

i = true;
console.log(i);
alert(i);
document.write('i');

j = 27;
console.log(j);
alert(j);
document.write('j');

k = -900;
console.log(k);
alert(k);
document.write('k');

l = 9/9;
console.log(l);
alert(l);
document.write('l');

m = 0;
console.log(m);
alert(m);
document.write('m');

//Завдання3

const x = 5;
console.log(x);
alert(x);
document.write('x');

const y = 6.25;
console.log(y);
alert(y);
document.write('y');

const z = -90;
console.log(z);
alert(z);
document.write('z');

const w = 'good';
console.log(w);
alert(w);
document.write('w');

const v = 'welcome';
console.log(v);
alert(v);
document.write('v');

const r = 'bye';
console.log(r);
alert(r);
document.write('r');

//Завдання4
prompt('Прізвище', 'Головацька');
let surname = 'Головацька';
console.log(surname);
alert(surname);
document.write(surname + "<br/>");

prompt('Імя' ,'Ірина');
let name = 'Ірина';
console.log(name);
alert(name);
document.write(name + "<br/>");

prompt('По батькові' ,'Богданівна');
let fathersname = 'Богданівна';
console.log(fathersname);
alert(fathersname);
document.write(fathersname + "<br/>");

// Завдання5
let person = surname + name + fathersname;
console.log(person);

//Завдання6
prompt('Прізвище', 'Головацька');
let surname1 = 'Головацька';
console.log(surname1);
alert(surname1);
document.write(surname1 + "<br/>");

prompt('Імя' ,'Галина');
let name1 = 'Галина';
console.log(name1);
alert(name1);
document.write(name1 + "<br/>");

prompt('По батькові' ,'Степанівна');
let fathersname1 = 'Степанівна';
console.log(fathersname1);
alert(fathersname1);
document.write(fathersname1 + "<br/>");

let mather = surname1 + name1 + fathersname1;
console.log(mather);

prompt('Прізвище', 'Головацький');
let surname2 = 'Головацький';
console.log(surname2);
alert(surname2);
document.write(surname2 + "<br/>");

prompt('Імя' ,'Богдан');
let name2 = 'Богдан';
console.log(name2);
alert(name2);
document.write(name2 + "<br/>");

prompt('По батькові' ,'Романович');
let fathersname2 = 'Романович';
console.log(fathersname2);
alert(fathersname2);
document.write(fathersname2);

let father = surname2 + name2 + fathersname2;
console.log(father);

//Завдання7
let number = +prompt('Введіть число', '100');
console.log(number);
let number1 = +prompt('Введіть число', '-60');
console.log(number1);
let number2 = +prompt('Введіть число', '1.5');
console.log(number2);

//Завдання8
let num1 = prompt('Введіть число', '100');
num1 = parseInt(num1);
console.log(num1);

let num2 = prompt('Введіть число', '-80');
num2 = parseInt(num2);
console.log(num2);

let num3 = prompt('Введіть число', '5');
num3 = parseInt(num3);
console.log(num3);

let num4 = prompt('Введіть число', '8');
num4 = parseInt(num4);
console.log(num4);

let result1 = num1 + num2 + num3 + num4;
console.log(result1);

//Завдання9
let p1 = prompt('Введіть число', '0.3');
p1 = parseFloat(p1);
console.log(p1);

let p2 = prompt('Введіть число', '1.344');
p2 = parseFloat(p2);
console.log(p2);

let p3 = prompt('Введіть число', '.123');
p3 = parseFloat(p3);
console.log(p3);

let p4 = prompt('Введіть число', '-5.0099');
p4 = parseFloat(p4);
console.log(p4);

let result2 = p1 + p2 + p3 + p4;
console.log(result2);

//Завдання10
let x1 = prompt('Введіть число', '0.99');
x1 = Math.round(x1);

let x2 = prompt('Введіть число', '9.3');
x2 = Math.round(x2);

let x3 = prompt('Введіть число', '2.123');
x3 = Math.round(x3);
console.log(x1, x2, x3);

let result3 = x1 + x2 + x3;
console.log(result3);

//Завдання11
let y1 = prompt('Введіть число', '2');
let y2 = prompt('Введіть число', '3');
let count = Math.pow(y1, y2);
console.log(count);

//Завдання12
let a1 = 100;
console.log(typeof a1);
let b1 = '100';
console.log(typeof b1);
let c1 = true;
console.log(typeof c1);
let d1 = undefined;
console.log(typeof d1);

//Завдання13
let i1 = 5 < 6; // true
let i2 = 5 > 6; // false
let i3 = 5 >= 6; // false
let i4 = 5 === 6; // false
let i5 = 10 === 10; // true
let i6 = 10 >= 10; // true
let i7 = 10 > 10; // false
let i8 = 10 < 10; // false
let i9 = 10 !== 10; // false
let i10 = 123 === '123'; // false
let i11 = 123 == '123'; // true
console.log(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11);


//Додатково
console.log(132 > 100 && 45 < 12 ); //вивід false
console.log(34 > 33 && 23 < 90 ); //вивід true
console.log(99 > 100 && 45 > 12 ); //вивід false
console.log(132 > 100 || 45 < 12 ); //вивід true
console.log(111 > 11 || 45 < 111 ); //вивід true
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); //вивід true
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); //вивід true
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); //вивід false
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); //вивід true
console.log(!!'-1'); //вивід true
console.log(!!-1); //вивід true
console.log(!!'0'); //вивід true
console.log(!!'null'); //вивід true
console.log(!!'undefined'); //вивід true
console.log(!!(3/'owu'));
console.log((111 > 11 || 45 < 111) ||  !!'0'); //вивід true
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); //вивід false

