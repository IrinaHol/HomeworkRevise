
//Callback Hell

// function routineBreakfast (breakfast, callback){
//
// 		setTimeout( () => {
// 				if (breakfast === 'noCooked'){
// 						callback('i буду спати весь день', null);
// 						return;
// 				}
// 				callback(null, 'Я сита!');
//
// 		},1000)
// }
//
// function routineWork(boss, callback){
// 		setTimeout( () => {
// 				if (boss === 'badMood'){
// 						callback('Я йду додому, мій босс злий', null);
// 						return;
// 				}
// 				callback(null, 'Чекаю обід....');
//
// 		},3000)
// }
//
// function routineLunch (lunch, callback){
// 		setTimeout( () => {
// 				if (lunch === 'soup') {
// 						callback('OOO, знов суп, не хочу', null);
// 						return;
// 				}
// 				callback(null, 'Смачний обід)))' )
// 		},2000)
// }
//
// //let buyBook = 200;
// function routineBook (costBook, callback){
// 		setTimeout( () => {
// 				if (costBook > 100) {
// 						callback('I do not have enough money', null);
// 						return;
// 				}
// 				callback(null, 'I will buy this book' )
// 		},500)
// }
//
// function routineWalk (rest, callback){
// 		setTimeout( () => {
// 				if (rest !== 'freeTime') {
// 						callback('Я не йду гуляту, у мене немає часу', null);
// 						return;
// 				}
// 				callback(null, 'Я можу піти погуляти' )
// 		},1000)
// }
//
// function routineDinner (dinner, callback){
// 		setTimeout( () => {
// 				if (dinner === 'fryPotato') {
// 						callback('Це жирна їжа, я не хочу поправитися(', null);
// 						return;
// 				}
// 				callback(null, 'Ооо..це я можу зїсти на вечерю' )
// 		},1000)
// }
// function routineCoffee (coffee, callback) {
// 		setTimeout(() => {
// 				if (coffee === false) {
// 						callback('Я хочу спати', null)
// 						return;
// 				}
// 				callback (null, 'Йду  вчити JS');
// 		},3000)
// }
//
//
//
// function routineSleep (timeSleep, callback){
// 		setTimeout( () => {
// 				if (timeSleep > 22) {
// 						callback('Всім добраніч!', null);
// 						return;
// 				}
// 				callback(null, 'Ще рано, треба вчити JS' )
// 		},2000)
// }
//
// routineBreakfast('Cooked', (err, great)=> {
// 		if(err) {
// 				console.log('ООО, ніхто не приготува сніданок. Я буду голодна(((', err);
// 				return;
// 		}
// 		console.log(great, 'Тепер я можу працювати');
//
// 		routineWork('goodMood', (err, data)=> {
// 				if(err){
// 						console.log(err);
// 						return;
// 				}
// 				console.log(data)
//
// 				routineLunch('nosoup',(err, data)=> {
// 						if (err){
// 								console.log(err);
// 								return;
// 						}
// 						console.log(data);
//
// 						routineBook(100,(err, data)=> {
// 								if (err){
// 										console.log(err);
// 										return;
// 								}
// 								console.log(data);
//
// 								routineWalk('freeTime',(err, data) => {
// 										if(err){
// 												console.log(err);
// 												return;
// 										}
// 										console.log(data);
//
// 										routineDinner ('Potato', (err, data)=> {
// 												if (err) {
// 														console.log(err);
// 														return;
// 												}
// 												console.log(data);
// 												routineCoffee( true,(err, data)=>{
// 														if(err){
// 																console.log(err);
// 																return;
// 														}
// 														console.log(data);
//
// 														routineSleep(20, (err, data)=> {
// 																if (err){
// 																		console.log(err);
// 																		return;
// 																}
// 																console.log(data);
// 														})
// 												})
// 										})
// 								})
// 						})
// 				})
// 		})
// })

// Promise

// function routineAwake (clock){
// 		return new Promise((resolve, reject)=> {
// 				setTimeout(() => {
// 						if (clock){
// 								resolve('Доброго ранку');
// 						}
// 						reject('Я проспала(((');
// 				}, 500);
// 		} )
// }
//
// function  prepareBreakfast (ready){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (ready === false){
// 								reject('Треба йти в магазин');
// 						}
// 						resolve('Я поснідала, можна йти на роботу');
// 				}, 2000);
// 		}))
// }
// function  busTime (bus){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (bus === false){
// 								reject('Я не встигаю, йду додому, не хочу працювати!');
// 						}
// 						resolve('Їду на роботу....');
// 				}, 1000);
// 		}))
// }
// function  eatLunch (haveMoney){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (haveMoney < 30){
// 								reject('Мені не вистачило коштів на обід(');
// 						}
// 						resolve('Ооо, можу піти пообідати в кафе)');
// 				}, 100);
// 		}))
// }
// function  goHome (time){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (time < 16){
// 								reject('Ще траба працювати, сиджу на роботі');
// 						}
// 						resolve('Ура, можна йти додому');
// 				}, 3000);
// 		}))
// }
// function  DoHW (haveFreeTime){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (haveFreeTime){
// 								resolve('Сідаю робити домашку!');
// 						}
// 						reject('Знову нема часу...');
// 				}, 1000);
// 		}))
// }
// function  goToBed () {
// 		return new Promise((resolve) => {
// 				setTimeout(() => {
// 						resolve('Good night!')
// 				}, 1500)
// 		})
// }
//
// routineAwake (true)
// 		.then(value =>{
// 		console.log(value);
// 		return prepareBreakfast(true);
// 		})
// 		.then(value => {
// 				console.log(value);
// 				return busTime (true);
// 		})
// 		.then(value => {
// 		console.log(value);
// 		return eatLunch(60);
// 		})
// 		.then(value => {
// 		console.log(value);
// 		return goHome(17);
// 		})
// 		.then(value => {
// 		console.log(value);
// 		return DoHW(true);
// 		})
// 		.then(value => {
// 		console.log(value);
// 		return goToBed();
// 		})
// 		.then(value => {
// 				console.log(value);
// 		})
// .catch(reason => {
// 		console.log(reason);
// })

// Async await


// function routineAwake (clock){
// 		return new Promise((resolve, reject)=> {
// 				setTimeout(() => {
// 						if (clock){
// 								resolve('Доброго ранку');
// 						}
// 						reject('Я проспала(((');
// 				}, 500);
// 		} )
// }
//
// function  prepareBreakfast (ready){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (ready === false){
// 								reject('Треба йти в магазин');
// 						}
// 						resolve('Я поснідала, можна йти на роботу');
// 				}, 2000);
// 		}))
// }
// function  busTime (bus){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (bus === false){
// 								reject('Я не встигаю, йду додому, не хочу працювати!');
// 						}
// 						resolve('Їду на роботу....');
// 				}, 1000);
// 		}))
// }
// function  eatLunch (haveMoney){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (haveMoney < 30){
// 								reject('Мені не вистачило коштів на обід(');
// 						}
// 						resolve('Ооо, можу піти пообідати в кафе)');
// 				}, 100);
// 		}))
// }
// function  goHome (time){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (time < 16){
// 								reject('Ще траба працювати, сиджу на роботі');
// 						}
// 						resolve('Ура, можна йти додому');
// 				}, 200);
// 		}))
// }
// function  DoHW (haveFreeTime){
// 		return new Promise( ((resolve, reject) => {
// 				setTimeout(()=>{
// 						if (haveFreeTime){
// 								resolve('Сідаю робити домашку!');
// 						}
// 						reject('Знову нема часу...');
// 				}, 1000);
// 		}))
// }
// function  goToBed () {
// 		return new Promise((resolve) => {
// 				setTimeout(() => {
// 						resolve('Good night!')
// 				}, 1500)
// 		})
// }
//
//
// async function routine (){
// 		try {
// 				const awake = await routineAwake(true);
// 				console.log(awake);
//
// 				const ready = await prepareBreakfast();
// 				console.log(ready);
//
// 				const bus = await busTime();
// 				console.log(bus);
//
// 				const money = await eatLunch(40);
// 				console.log(money);
//
// 				const time = await goHome(17);
// 				console.log(time);
//
// 				const freeTime = await DoHW(true);
// 				console.log(freeTime);
//
// 				const sleep = await goToBed();
// 				console.log(sleep);
// 		}
// 		catch (err){
// 				console.log(err)
// 		}
//
// }
//
// routine();

// Реалізувати друкарську машинку.
// 		У вас є текст "Hello World". (або юудь який інший на ваш розсуд)
// Ваша функція має друкувати цей текст по 1 симоволу в браузері.
// 		КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
// 		Цим самим ви маєте симулювати написання даного тексту юзером.
// 		Приклад: "Hello"
// Затримки:
// 		H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)

// function typeWriter1 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
//
// function typeWriter2 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 								resolve(letter)
// 						},Math.random()*1000)
// 		})
// }
//
// function typeWriter3 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
// function typeWriter4 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
// function typeWriter5 (letter){
// 		return new Promise((resolve) => {
// 				interval = Math.random()*1000;
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},interval)
// 		})
// }
//
// function typeWriter6 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
// function typeWriter7 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
// function typeWriter8 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
// function typeWriter9 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
// function typeWriter10 (letter){
// 		return new Promise((resolve) => {
// 				setTimeout(()=> {
// 						resolve(letter)
// 				},Math.random()*1000)
// 		})
// }
//
// async function word() {
// 		try {
// 				const letter1 = await typeWriter1('H');
// 				console.log(letter1)
// 				const letter2 = await typeWriter2('e');
// 				console.log(letter2)
// 				const letter3 = await typeWriter3('l');
// 				console.log(letter3)
// 				const letter4 = await typeWriter4('l');
// 				console.log(letter4)
// 				const letter5 = await typeWriter5('o');
// 				console.log(letter5)
// 				const letter6 = await typeWriter6('W');
// 				console.log(letter6)
// 				const letter7 = await typeWriter7('o');
// 				console.log(letter7)
// 				const letter8 = await typeWriter8('r');
// 				console.log(letter8)
// 				const letter9 = await typeWriter9('l');
// 				console.log(letter9)
// 				const letter10 = await typeWriter10('d');
// 				console.log(letter10)
//
// 		}
// 		catch(e){
// 				console.log(e);
// 		}
// }
// word();


