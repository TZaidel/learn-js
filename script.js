//*----------------------------------Модуль 1. Заняття 1. Змінні, типи та оператори
//? Example 1 - Математичні оператори
// Виведи на екран загальну кількість яблук та винограду. Різницю яблук та винограду.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log(total)
// const diff = apples - grapes ;
// console.log(diff)



//? Example 2 - Комбіновані оператори
// Заміни вираз перевизначення комбінованим оператором +=.

// let students = 100;
// students += 50;
// console.log(students);



//? Example 3 - Пріоритет операторів
// Розбери пріоритет операторів в інструкції привласнення значення змінної result.

// const result = 108 + 223 - 2 * 5;
// console.log(result);



//? Example 4 - Клас Math
// Напиши скрипт, який виводить у консоль заокруглені вгору/вниз і т.д. значення змінної value. Використовуй методи Math.floor(), Math.ceil() та Math.round(). Перевір що буде в консолі при значеннях 27.3 та 27.9.

// const value = 27.5;
// console.log(Math.floor(value))
// console.log(Math.ceil(value))
// console.log(Math.round(value))



//? Example 5 - Шаблонні рядки
// Склади фразу за допомогою шаблонних рядків A has B bots in stock, де A, B - змінні вставлені в рядок.

// const companyName = 'Cyberdyne Systems';
// const repairBots = 150;
// const defenceBots = 50;
// const message = `${companyName} has ${repairBots + defenceBots} bots in stock`;
// console.log(message); // "Cyberdyne Systems has 200 bots in stock"



//? Example 6 - Методи рядків та чейнінг
// Напиши скрипт, який розраховує індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини у метрах.
// Вага та висота зберігаються у змінних weight та height, але не як числа, а в вигляді рядків (спеціально для завдання). Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома. Індекс маси тіла необхідно округлити до однієї цифри після коми;

// let weight = '88,3';
// let height = '1.75';

// weight = weight.replace(',', '.');
// height = height.replace(',', '.');

// const bmi = Number( (weight / (height ** 2 )).toFixed(1));
// console.log(bmi); // 28.8



//? Example 7 - Оператори порівняння та приведення типів
// Яким буде результат виразів?

// console.log(5 > 4); //t

// console.log(10 >= '7');  //t

// console.log('2' > '12');  //t

// console.log('2' < '12');  //f

// console.log('4' == 4); //t

// console.log('6' === 6); //f

// console.log('false' === false);  //f

// console.log(1 == true); //t

// console.log(1 === true);  //f

// console.log('0' == false);  //t

// console.log('0' === false);  //f

// console.log('Papaya' < 'papaya');  //t

// console.log('Papaya' === 'papaya');  //f

// console.log(undefined == null);  //t

// console.log(undefined === null);  //f



//? Example 8 - Логічні оператори
// Яким буде результат виразів?

// console.log(true && 3);  //3

// console.log(false && 3);  //f

// console.log(true && 4 && 'kiwi');  //kiwi

// console.log(true && 0 && 'kiwi');  //0

// console.log(true || 3); //true

// console.log(true || 3 || 4);  //true

// console.log(true || false || 7);  //true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); //f

// console.log(null || (2 && 3) || 4); //3



//! Example 9 - Значення за замовчуванням та оператор нульового злиття
// Отрефактори код так, щоб у змінну value присвоювалося значення змінної incomingValue, якщо воно не рівне undefined або null. В іншому випадку має присвоюватися значення defaultValue. Перевір роботу скрипта для наступних значень змінної incomingValue: null, undefined, 0, false. Використовуй оператор ?? (nullish coalescing operator).

// const incomingValue = 5;
// const defaultValue = 10;
// const value = incomingValue || defaultValue;
// if ((incomingValue === undefined) && (incomingValue === null)) {
//     value = defaultValue
// } else {
//     value = incomingValue
// }
// console.log(value);


//! Example 10 - Оператор % та методи рядків
// Напиши скрипт, який переведе значення totalMinutes (кількість хвилин) в рядок у форматі годин та хвилин HH:MM.

// 70 покаже 01:10
// 450 покаже 07:30
// 1441 покаже 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

//!!!!!!!!!!!!
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i ++) {
//     sum += i;
//     console.log(i)
// }

// console.log(sum);





//*Модуль 1. Заняття 2. Розгалуження. Цикли
//? Example 1 - Введення користувача та розгалуження
// Використовуючи конструкцію if..else та prompt, напиши код, який питатиме: "Яка офіційна назва JavaScript?". Якщо користувач вводить ECMAScript, то показуй alert з рядком "Правильно!", в іншому випадку - "Не знаєте? ECMAScript!"

// const userAnswer = prompt("Яка офіційна назва JavaScript?")

//*1
// if (userAnswer === 'ECMAScript') {
//     alert('Правильно!')
// } else {
//     alert("Не знаєте? ECMAScript!")
// }

//*2
// if (userAnswer === 'ECMAScript') alert('Правильно!'); else alert("Не знаєте? ECMAScript!")


//*3
// userAnswer === 'ECMAScript' ? alert('Правильно!') : alert("Не знаєте? ECMAScript!")


//*4
// let msg = userAnswer === 'ECMAScript' ? 'Правильно!' : 'Не знаєте? ECMAScript!'
// alert(msg)




//? Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.". Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.

// const hours = 14;
// const minutes = 35;
//*1
// let timestring = (minutes === 0) ? `${hours} г.` : `${hours} г. ${minutes} хв.`
//*2
// if (minutes === 0) timestring = `${hours} г.`;
// else timestring = `${hours} г. ${minutes} хв.`;

// console.log(timestring)


//? Example 3 - Розгалуження
// Напиши скрипт, який виводить у консоль рядок "Це позитивне число", якщо у prompt користувач ввів число більше нуля. Якщо було введено нуль, виводь в консоль рядок "Це нуль". Якщо передали від'ємне число, у консолі повинен бути рядок "Це негативне число".

// const userInput = prompt('Введіть число');

// if (userInput > 0) {
//     console.log('Це позитивне число')
// } else if (userInput == 0) {
//     console.log('Це нуль')
// } else {
//     console.log('Це негативне число')
// }



//? Example 4 - Вкладені розгалуження
// Напиши скрипт, який порівнює числа у змінних a та b. Якщо обидва значення більше 100, то виведи в консоль максимальне з них. В протилежному випадку у консолі повинна бути сума значення b та числа 512.

// const a = 120;
// const b = 180;

//*1
//     let biggerNum = a > b ? a : b
// if (a > 100 && b > 100) {
//     console.log(biggerNum)
// } else { console.log( b + 512)}
    
//*2
// if (a > 100 && b > 100) {
//     console.log(Math.max(a, b)
//    )
// }   else { console.log( b + 512)}

//? Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';

// if (!link.endsWith('/')) {
// link += '/'
// }
// console.log(link);



//? Example 6 - Форматування посилання (includes та логічне «І»)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ, але тільки в тому випадку, якщо в link є підрядок "my-site". Використовуй конструкцію if...else.

let link = 'https://somesite.com/about';
//*1
// if (link.includes('my-site')){ link += '/'}
//*2
// link = link.includes('my-site') ? link += '/' : link += '123'

// console.log(link);


// Example 7 - Форматування посилання(тернарний оператор)
// Виконай рефакторинг коду задачі номер 4, використовуючи тернарний оператор.

// let link = 'https://somesite.com/about';
// if (link.includes('my-site') && !link.endsWith('/')) {
//   link += '/';
// }
// console.log(link);


//? Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.
// Якщо значення змінної hours:
// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"
// const hours = 17;

// if (hours < 17) {
//     console.log('Pending')
// } else if (hours === 17) {
//     console.log('Expires')
// } else {
//     console.log('Overdue')
// }

//? Example 9 - Дедлайн здачі проекту(if...else)
// Напиши скрипт для відображення часу дедлайну здачі проекту. Використовуй конструкцію if...else.

// Якщо до дедлайну 0 днів - виведи рядок "Сьогодні"
// Якщо до дедлайну 1 день - виведи рядок "Завтра"
// Якщо до дедлайну 2 дні - виведи рядок "Післязавтра"
// Якщо до дедлайну 3+ днів - виведи рядок "Дата у майбутньому"
// const daysUntilDeadline = 3;
// if (daysUntilDeadline === 0) {
//     console.log('Сьогодні')
// } else if (daysUntilDeadline === 1) {
//       console.log('Завтра')
// } else if (daysUntilDeadline === 2) {
//       console.log('Післязавтра')
// } else if (daysUntilDeadline >= 3) {
//       console.log('Дата у майбутньому')
// }
    



// ?Example 10 - Дедлайн здачі проекту(switch)
// Виконай рефакторинг коду задачі номер 5 використовуючи switch.

// const daysUntilDeadline = 1;

// switch(daysUntilDeadline){
//     case 0:
//     console.log('Сьогодні')
//     break;
//     case 1 :
//     console.log('Завтра')
//     break;
//     case 2:
//     console.log('Післязавтра')
//     break;
//  default:
//       console.log('Дата у майбутньому')
// }


//? Example 11 - Цикл for
// Напиши цикл for, який виводить у консоль браузера числа за зростанням від min до max, але тільки якщо число кратне 5.

// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 1){
//     if(i % 5 === 0 ) console.log(i)
// }

//? Example 12 - Введення користувача та розгалуження
// Напиши скрипт, який питатиме логін за допомогою prompt та логувати результат у консоль браузера.

// Якщо відвідувач вводить "Адмін", то prompt запитує пароль
// Якщо нічого не введено або натиснуто клавішу Esc - вивести рядок "Скасовано"
// В іншому випадку вивести рядок "Я вас не знаю"
// Пароль перевіряти так:

// Якщо введено пароль "Я адмін", то вивести рядок "Здрастуйте!"
// Інакше виводити рядок "Невірний пароль"

// const userLogin = prompt('Enter your login')?.trim()

// if (userLogin === 'Admin') {
//     const userPassword = prompt('Enter your password')
//     if (userPassword === 'ImAdmin') { prompt('Hello') }
//     else {prompt('Not correct')}
// }
// else if (!userLogin)
// // else if (userLogin === '' || userLogin === undefined)
// {
//     prompt('Escape')
// } else
// { prompt('I dont know you') }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clientms = ["Mango", "Ajax", "Poly"];

// for (const client of clientms) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// // Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
// // припиняється і управління передається на наступну ітерацію.
// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i])
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число більше за ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }




// *Модуль 2. Заняття 3. Масиви
//? Example 1 - Базові операції з масивом
// Створіть масив genres з елементами «Jazz» та «Blues».
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть у консоль останній елемент масиву. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.
// const genres = ['Jazz', 'Blues'];
// genres.push('Rock')
// console.log(genres[0])
// console.log(genres[genres.length - 1])
// console.log(genres.shift())
// console.log(genres.splice(0, 1)[0])
// genres.unshift('Country', 'Reggie')
// console.log(genres)


//? Example 2 - Масиви та рядки
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких зберігаються у змінній values у вигляді рядка. Значення гарантовано розділені пробілом.

// const values = '8 11';
// const valuesArr = values.split(' ')
// console.log(valuesArr)
// const a = Number(valuesArr[0])
// const b = Number(valuesArr[1])
// const square = a * b
// console.log(square)


//? Example 3 - Перебір масиву
// Напиши скрипт для перебору масиву fruits циклом for. Для кожного елемента масиву виведи в консоль рядок у форматі номер_елемента: значення_елемента. Нумерація елементів повинна починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1} : ${fruits[i]} `)
// }


//! Example 4 - Масиви та цикли
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';
// const namesArr = names.split(',')
// const phonesArr = phones.split(',')
// console.log(namesArr, phonesArr)




//? Example 5 - Масиви та рядки
// Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього. Результуючий рядок не повинен починатися або закінчуватися символ пробілу. Скрипт повинен працювати для будь-якого рядка.

// const string = 'Welcome to the future man';
//     const stringArr = string.split(' ')
// stringArr.pop()
// stringArr.shift()
// const newString = stringArr.join(' ')
// console.log(newString)


//? Example 6 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить його в консоль.

// const string = 'Welcome to the future';
//*1
// const stringArr = string.split('').reverse().join('')
// console.log(stringArr)

//*2
// const stringArr = string.split('')
// let newArr = []
// for (let i = stringArr.length-1; i >=0; i--){

//     newArr.push(stringArr[i])
//     console.log(newArr)
// }
// newArr = newArr.join('')
//     console.log(newArr)


//? Example 7 - Сортування масиву із циклом
// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою елемента.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// for (let i = 0; i < langs.length-1; i++){
//     for (let k = i + 1; k < langs.length; k++) {
//         console.log(langs[i], langs[k])
//         if (langs[i] > langs[k]) {
//             let temp = langs[i]
//             langs[i] = langs[k]
//             langs[k] = temp
//             console.log(temp)
//             console.log(langs)
//         }
//     }
// }



//? Example 8 - Пошук елемента
// Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (const num of numbers) {
//     console.log(num)
//     if (num < min) {
//         min=num
//     }
// }
// console.log(min); // 1


//!!!!!

// let multipl = ''
// for (let i = 1; i <= 9; i++){
//     for (let j = 1; j <= 9; j++){
//         multipl += ' ' + i * j;
//         console.log(` ${multipl} += ' ' + ${i} * ${j};`)
//         if (i * j < 10) {
//             multipl += ' '
//             console.log(multipl)

//         }
//     }
//     multipl = ''
// }

//*** */
// function multiply() {
//   let total = 1;

//   for (const argument of arguments) {
//       total *= argument;
//       console.log(arguments)
//   }

//   return total;
// }

// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120


// //*1
// function fn() {
//   // Змінна args буде містити повноцінний масив
//     const args = Array.from(arguments);
//     console.log(args)
// }

// console.log(fn(1, 2, 3)); //  6
// console.log(fn(1, 2, 3, 4)); //  24
// console.log(fn(1, 2, 3, 4, 5)); //  120

// //*2
// function fc(...arg) {
//    console.log(arg)
// }

// console.log(fc(1, 2, 3)); //  6
// console.log(fc(1, 2, 3, 4)); //  24
// console.log(fc(1, 2, 3, 4, 5)); //  120


//******** *
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//   } else if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//   } else {
//     console.log("Операція зняття коштів проведена успішно");
//   }
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена успішно"

//==================
// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція зняття коштів проведена");
// }

// withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
// withdraw(500, 300); // "Недостатньо коштів на рахунку"
// withdraw(100, 300); // "Операція зняття коштів проведена"


//************ */
// Task 1: Create a Function
// Create a function called multiply that takes two parameters, num1 and num2, and returns their product. Call this function with different sets of numbers and log the results to the console.
// function multiply(num1, num2) {
//     return num1 * num2
// }

// let result = multiply(3, 4)
// console.log(result)
// console.log(multiply(2, 3))


// Task 2: Calculate Average
// Write a function called calculateAverage that takes an array of numbers as a parameter and returns the average of those numbers. Test it with an array of your choice.

// function calculateAverage(...args) {
   
//             let total = 0
//     for (const arg of args) {

//         console.log(arg)
//         total += arg
//         console.log(total)
//     }

//     let avarage = total / args.length
//     return console.log(avarage)
// }

// calculateAverage(2, 3, 4, 5)


// Task 3: String Reversal
// Create a function named reverseString that takes a string as a parameter and returns the reverse of that string. For example, reverseString("hello") should return "olleh".

// function reverseString(str) {
//     return str.split('').reverse().join('')
// }
// let rev = reverseString('can you kill me pls?')
// console.log(rev)


// Task 4: Even or Odd
// Write a function called isEven that takes an integer as a parameter and returns true if it's even and false if it's odd.

// function isEven(a) {
//     if (a % 2 === 0) {
//         return true
//     }
//     return false
// }

// let num = isEven()
// console.log(num)

// Task 5: FizzBuzz
// Write a function called fizzBuzz that takes a number as a parameter and does the following:

// If the number is divisible by 3, return "Fizz."
// If the number is divisible by 5, return "Buzz."
// If the number is divisible by both 3 and 5, return "FizzBuzz."
// Otherwise, return the number itself as a string.
// Test your function with various numbers.


// function fizzBuzz(a) {
//     if (a % 3 === 0 && a % 5 === 0) {
//         return 'FizzBuzz'
//     } else if (a % 5 === 0) {
//         return 'Buzz'
//     } else if (a % 3 === 0 ) {
//         return 'Fizz'
//     }
// }

// let nr = fizzBuzz(10)
// console.log(nr)

//! Task 6: Find the Longest Word
// Write a function called findLongestWord that takes an array of words as a parameter and returns the longest word in the array. If there are multiple words with the same maximum length, return the first one you encounter.

// function findLongestWord(arr) {
//     let longestArr = arr[0]
//     for (let i = 0; i < arr.length; i++){
//         const currentArr = arr[i]
//             if (currentArr.length > longestArr.length) {
//                   longestArr=currentArr

//         }
//     }
//     return longestArr
// }

// console.log(findLongestWord(['lila', 'mon', 'sunny', 'rain']))




// Task 7: Palindrome Checker
// Create a function called isPalindrome that takes a string as a parameter and returns true if it's a palindrome (reads the same forwards and backwards), and false otherwise.

// function isPalondrome(word) {
//     if (word == word.split('').reverse().join('')) {
//         return true
//     }
//     return false
// }

// console.log(isPalondrome("zamaz"))

//! Task 8: Count Occurrences
// Write a function called countOccurrences that takes an array of numbers and a target number as parameters. It should return the number of times the target number appears in the array.

// function countOccurrences(numbers, target) {
//     let count = 0
//     for (let i = 0; i < numbers.length; i++){
//         if (numbers[i] === target) {
//             count++
//         }
//     }
//     return count
// }

// console.log(countOccurrences([1, 2, 5, 2, 3, 1, 2, 2], 2))


//! Task 9: Capitalize Words
// Create a function called capitalizeWords that takes a sentence as a parameter and returns the sentence with the first letter of each word capitalized.

// function capitalizeWords(str) {
    
// }

// capitalizeWords('carry me home')


// Task 12: Title Case
// Create a function called titleCase that takes a sentence as a parameter and returns the sentence with the first letter of each word capitalized, while converting all other letters to lowercase.


//! Task 1: Simple Calculator
// Write a function called calculate that takes two numbers (num1 and num2) and an operator ('+', '-', '*', '/') as parameters and returns the result of applying the operator to the two numbers.

// function calculate(num1, num2, oper) {
//     return num1 oper num2
// }

// console.log(calculate(2, 4, '*'))


// Task 2: Temperature Conversion
// Create a function called convertToFahrenheit that takes a temperature in Celsius as a parameter and returns the equivalent temperature in Fahrenheit. The formula for conversion is (Celsius * 9/5) + 32.

// function convertToFahrenheit(temp) {
//     return (temp * 9/5) +32
// }

// console.log(convertToFahrenheit(30))


// Task 4: Square a Number
// Implement a function called square that takes a number as a parameter and returns the square of that number (i.e., the number multiplied by itself).

// function square(number) {
//     return number*number
// }

// console.log(square(4))

//! Task 5: Check for Prime Numbers
// Create a function called isPrime that takes an integer as a parameter and returns true if it's a prime number (only divisible by 1 and itself) and false otherwise.

//************* */
// function getExtremeElements(array) {
//   // Change code below this line
// return [array[0], array[array.length-1]]

//   // Change code above this line
// }


// console.log(getExtremeElements([1, 2, 3, 4, 5]) )
// getExtremeElements(["Earth", "Mars", "Venus"])
// getExtremeElements(["apple", "peach", "pear", "banana"])

//******************* */
// function splitMessage(message, delimiter) {
//   let words;
// words = message.split(delimiter)
    
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "))
// console.log(splitMessage("best_for_week", "_"))


//******************** */
// function calculateEngravingPrice(message, pricePerWord) {
//    const messageLength= message.split(' ').length

//     console.log(messageLength)
//     let totalPrice = messageLength * pricePerWord
//     return totalPrice
// }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))
// //calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50


//******************** */
// function slugify(title) {
//   return title.toLowerCase().split(' ').join('-')
// }
// console.log(slugify("Arrays for begginers"))
// //slugify("Arrays for begginers") повертає "arrays-for-begginers"


//******************** */

// function makeArray(firstArray, secondArray, maxLength) {
   
   //*1
    // const newArr = firstArray.concat(secondArray)
    // newArr.length = maxLength 
    // return newArr
    //*2
//        return firstArray.concat(secondArray).slice(0, maxLength)    
// }
//   console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))
//makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]


//******************** */

// function calculateTotal(number) {
//         let total =0
//     for (let i = 1; i <= number; i++){
//         console.log(i)
//         total += i
//     }
//        return total
// }
// console.log(calculateTotal(3)) //6


//******************** */

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (let i = 0; i < order.length; i++){
//         total += order[i]
//     }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])) //138


//! repeat ******************* */

// function findLongestWord(string) {

//     const newArr = string.split(' ')
//     let longestWord = ''
//     for (const arr of newArr) {
//         console.log(arr)
//         console.log(longestWord)
//         if (arr.length > longestWord.length) {
//         longestWord= arr
//         }
//     }
//     return longestWord

// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")) //jumped


//******************** */

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//     for (let i = min; i <= max; i++){
//         numbers.push(i)
//     }
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17))


//******************** */
// function filterArray(numbers, value) {
// let nr = []
//     for (const num of numbers) {

//         if (num > value) {
//             nr.push(num)
//         }
//     }
//             return nr
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) //[4, 5]


//******************** */
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("plum"))


//******************** */

// function getCommonElements(array1, array2) {
//     let newArr = []
//     for (let i = 0; i < array1.length; i++){
//         if (array2.includes(array1[i])) {
//             newArr.push(array1[i])
//         }
//     }
// return newArr
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])) //2
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) //1, 2


//******************** */
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//     for(const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) //4.5


//******************** */
// function getEvenNumbers(start, end) {
//     let arr = []
//     for (let i = start; i <= end; i++) {

//         if (i % 2 === 0)
//             arr.push(i)
//     }
//            return arr
// }
// console.log(getEvenNumbers(3, 11)) //4.6.8.10
// console.log(getEvenNumbers(6, 12))


//******************** */


// function findAverage(array) {
//             let sum = 0
//     if (array !== NaN) {
      
//         for (const arr of array) {
//             sum += arr
//         }
//         return sum / array.length
//     }
//     return 0

// }

// function findAverage(array) {
//             let sum = 0
//     if (array === NaN) {
//         return 0
//     }
//     else {
//         for (const arr of array) {
//             sum += arr
//         }
//         return sum / array.length
//     }
     

// }

// console.log(findAverage([1, 2, 3, 4, 5]))
// console.log(findAverage([]))


//!-----------------------------
// Модуль 2. Заняття 4. Функції
//? Example 1 - Індекс маси тіла
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

// Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома.

// Індекс маси тіла необхідно округлити до однієї цифри після коми;


// function calcBMI(weight, height) {
// weight = Number(weight.replace(',', '.'))
//    height = Number(height.replace(',', '.'))
//     const bmi = Number((weight / Math.pow(height, 2)).toFixed(1))
//     return bmi
// }
// console.log(calcBMI('88,3', '1.75')); // 28.8


//? Example 2 - Найменше з чисел
// Напиши функцію min(a,b), яка повертає найменше з чисел a та b.
// function min(a, b) {
    
//*1
//     if (a < b) {
//         return a
//     } 
//     return b
//*2 
// return a<b ? a :b
// }

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


//? Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами, значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ')
//     console.log(dimensions)
//     let square=1
//     for (const dim of dimensions) {
//         console.log(dim)
//         square *= dim
//     }
//     return square
// }
// console.log(getRectArea('8 11'));


//? Example 4 - Логування елементів
// Напиши функцію logItems(items), яка отримує масив та використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>. Нумерація елементів повинна починатися з 1.

// Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.

// function logItems(items) {
//     const result = []
//     for (let i = 0; i < items.length; i++){
//     result.push(`${i + 1} - ${items[i]}`)
//     }
//     return result
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']))
// console.log(logItems(['🍎', '🍇', '🍑', '🍌', '🍋']))


//? Example 5 - Логування контактів
// Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача. У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність. Кількість імен та телефонів гарантовано однакова.

// function printContactsInfo(names, phones) {
//     names = names.split(',')
//         phones = phones.split(',')
//     let arr =[]
//     for (let i = 0; i < names.length; i++){
//   arr.push(`${names[i]} - ${phones[i]}`)
//     }
// return arr.join(' ')
// }

// console.log(printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// ));

//*


//? Example 6 - Пошук найбільшого елемента
// Напиши функцію findLargestNumber(numbers)яка шукає найбільше число в масиві.

// function findLargestNumber(numbers) {
//     let nr = numbers[0]
//     for (const number of numbers) {
//         if (number > nr) {
//      nr = number
//         }
//     }
//             return nr
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83


//? Example 7 - Середнє значення
// Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення. Усі аргументи будуть лише числами.

// function calAverage(...args) {
//     let sum = 0
//     for (const arg of args) {
//         sum += arg
//     }
//     return sum/ args.length
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2


//! Example 8 - Форматування часу
// Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(totalMinutes) {

// }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"


//? Example 9 - Колекція курсів (includes, indexOf, push і т. д.)
// Напишіть функції для роботи з колекцією навчальних курсів courses:

// addCourse(name) - додає курс до кінця колекції
// removeCourse(name) - видаляє курс із колекції
// updateCourse(oldName, newName) - змінює ім'я на нове

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];
// function addCourse(name) {
//     if (courses.includes(name))   console.log('Ви вже маєте такий курс')
//      else   courses.push(name)
// }

// function removeCourse(name) {
//     const index = courses.indexOf(name)
//     console.log(index)
//     if (courses.includes(name)) {
//         courses.splice(index, 1)
//     } else console.log('Курс із таким імям не знайдено')
//     return 
// }

// function updateCourse(old, newN) {
//     const index = courses.indexOf(old)
//     if (courses.includes(old)) {
//         courses.splice(index, 1, newN)
//     } else console.log('Курс із таким імям не знайдено')
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'Ви вже маєте такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

// updateCourse('HTML', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']



//******************************** */

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

//******* */
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(`${key} - ${book[key]}`);
// }

//** */
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(animal); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

//** */

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }


//** */
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "На березі спокійних вод",
//     author: "Роберт Шеклі",
//     rating: 8.51,
//   },
//   {
//     title: "Сон смішної людини",
//     author: "Федір Достоєвський",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); 

//** */
//** */ Модуль 3. Заняття 1. Об'єкти
//? Example 1 - Основи об'єктів
// Напиши скрипт, який для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy'
// user.hobby = 'skydiving'
// user.premium = false
// console.log(user)

//*1
// for (const key of Object.keys(user)) {
//     console.log(`${key} - ${user[key]}`)
// }
//*2
// for (const key in user) {
//  console.log(`${key} - ${user[key]}`)
// }

//? Example 2 - метод Object.values()
// У нас є об'єкт, де зберігаються зарплати нашої команди. Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum. Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const keys = Object.values(salaries) 
// sum = 0
// for (const key of keys) {
//     sum += key
// }
// console.log(sum)

//? Example 3 - Масив об'єктів
// Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const key of stones) {
//         if (key.name === stoneName)
//     return key.price * key.quantity
//     }
//     return `stone - ${stoneName} is not fined`
// }


// console.log(calcTotalPrice(stones, 'Діамант'))

//! Example 4 - Комплексні завдання
// Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/* Типів транзакцій всього два. Можна покласти чи зняти гроші з рахунку.*/

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// //   Кожна транзакція це об'єкт із властивостями: id, type та amount
// const account = {
//   // Поточний баланс рахунку
//   balance: 0,

//   // Історія транзакцій
//   transactions: [],

//   /*Метод створює та повертає об'єкт транзакції.
//    Приймає суму та тип транзакції.*/
//   createTransaction(amount, type) {},

//   /*Метод, що відповідає за додавання суми до балансу.
//    Приймає суму транзакції.
//    Викликає createTransaction для створення об'єкта транзакції після чого додає його до історії транзакцій*/
//   deposit(amount) {},

//   /*Метод, що відповідає за зняття суми з балансу. Приймає суму транзакції. Викликає createTransaction для створення об'єкта транзакції після чого додає його до історії транзакцій. Якщо amount більше ніж поточний баланс, виводь повідомлення про те, що зняття такої суми не можливе, недостатньо коштів.*/
//   withdraw(amount) {},

//   /* Метод повертає поточний баланс*/
//     getBalance() {
//       return this.balance
//   },

//   /* Метод шукає та повертає об'єкт транзакції по id*/
//   getTransactionDetails(id) {},

//   /* Метод повертає кількість коштів певного типу транзакції з усієї історії транзакцій */
//   getTransactionTotal(type) {},
// };

// console.log(account.getBalance())



//******* */
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (key in apartment) {
//     keys.push(key)
//     console.log(keys)
//     values.push(apartment[key])
//     console.log(values)
// }

//*
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const obj in object) {
//         if (object.hasOwnProperty(obj)) {
//      propCount += 1
//     }
// }
//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))
// console.log(countProps({ name: "Mango", age: 2 }))

//*
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// console.log(keys)
// for(const key of keys){
//   values.push(apartment[key])
// }
// console.log(values)

//*
// function countProps(object) {
// return   Object.keys(object).length
// }
// console.log(countProps({ name: "Mango", age: 2 })) //2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }))  //3

//*
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//     const value = Object.values(salaries)
//     console.log(value)
//     for (const val of value) {
//         totalSalary += val
//     }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })) //330

//*
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex)
//     console.log(hexColors)
//     rgbColors.push(color.rgb)
//     console.log(rgbColors)
// }

//*
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     for (const product of products) {
//         if (productName === product.name) {
//             return product.price
//         }
// }
//     return null   
// }
// console.log(getProductPrice("Radar")) //1300
// console.log(getProductPrice("Engine")) //null
// console.log(getProductPrice("Scanner"))

//*
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const arr = []
//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             arr.push(product[propName])
//         }
        
// }
// return arr
// }
// console.log(getAllPropValues("name"))
// console.log(getAllPropValues("quantity"))

//*
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let sum = 0
//     for (const product of products) {
//         if (productName === product.name) {
//             sum = product.price * product.quantity
//         }
//     }
//     return sum
// }
// console.log(calculateTotalPrice("Blaster"))
// console.log(calculateTotalPrice("Radar"))

//*
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     return { category, priority, completed, ...data }
//   // Change code above this line
// }

// console.log(makeTask({ category: "Finance", text: "Take interest" }))///{ category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// console.log(makeTask({ text: "Buy bread" })) //{ category: "General", priority: "Normal", text: "Buy bread", completed: false }

//*
// function add(...args) {
//   let total = 0
//     for (const arg of args) {
//       console.log(`${total} + ${arg}`)
//    total +=arg
//   }
//   return total
// }
// console.log(add(12, 4, 11, 48))

//*
// function addOverNum(firstNum, ...args) {
//   let total = 0;
//     for (const arg of args) {
//         if (arg > firstNum) {
//             total += arg;
//         }
//   }
//   return total;
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8))  //71

//*
// function findMatches(array, ...num) {
//     const matches = []; // Don't change this line
//     for (const arr of array) {
//         if (num.includes(arr)) {
//             matches.push(arr)
//         }
//     }
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)) //[17, 89, 2]

//*
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//    this.books.splice([this.books.indexOf(oldName)], 1, newName)
          
    
// console.log(this.books)
//     },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")) 
// //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

//*
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
// this.potions.push(potionName)
// console.log(this.potions)
//   },
// };
// console.log(atTheOldToad.addPotion("Invisibility"))

//*
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(potionName),1)

// console.log(this.potions)
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath"))

//*
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
// this.potions.splice(this.potions.indexOf(oldName), 1, newName)
// console.log(this.potions)
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))

//!-------------------------
// Basic Array Manipulation:
// Create an array of your favorite fruits.
// Add a new fruit to the array using push().
// Remove the last fruit from the array using pop().
// Use unshift() to add a fruit to the beginning of the array.
// Remove the first fruit using shift().
// Accessing Array Elements:

// Create an array of numbers.
// Use indexing to access and log specific elements from the array.
// Array Iteration:

// Use a for loop to iterate through an array and log each element.
// Use the forEach() method to achieve the same result.
// Use the map() method to create a new array based on the values of the original array.
// Filtering and Sorting:

// Create an array of objects with attributes like name, age, and city.
// Use the filter() method to create a new array of people living in a specific city.
// Use the sort() method to sort the array by age.
// Searching and Finding:

// Create an array of numbers.
// Use indexOf() to find the index of a specific value.
// Use includes() to check if a value exists in the array.
// Use find() to find the first element that satisfies a condition.
// Use findIndex() to find the index of the first element that satisfies a condition.
// Array Transformation:

// Create an array of strings.
// Use the join() method to create a single string from the array.
// Use the split() method to convert a string into an array.
// Array Methods Practice:

// Familiarize yourself with other array methods like slice(), splice(), concat(), and reduce(). Try using them in different scenarios.
// Multidimensional Arrays:

// Create a multidimensional array (an array of arrays) to represent a grid or a table.
// Use nested loops to access and manipulate elements within the multidimensional array.
// Advanced Tasks:

// Implement common algorithms using arrays, like searching for the maximum or minimum value, reversing an array, or checking if an array is sorted.
// Solve coding challenges on platforms like LeetCode or HackerRank that involve array manipulation.
// Project-Based Learning:

// Start a small project that involves creating, modifying, and working with arrays. For example, create a to-do list application or a simple quiz game.
// Remember to consult the JavaScript documentation for arrays (MDN Web Docs) whenever you encounter methods or concepts you're not familiar with. Practice regularly, and you'll become more comfortable and proficient in working with JavaScript arrays.
//!


//*
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// console.log(registerGuest("Манго", greet))

//*
// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
// console.log(isRecipientAvailable)
//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Полі", takeCall, leaveHoloMessage);


//*
// function doSomething(callback) {
//   // Perform some operation
//   console.log("Doing something...");
//   // Call the callback function
//   callback();
// }

// function callbackFunction() {
//   console.log("Callback function executed.");
// }
// doSomething(callbackFunction);

//*
// const array = ['black', 'red', 'white']
// array.push('pink')
// array.shift()
// console.log(array)
// console.log(array.length)

//*
// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// for (const num of numbers) {
//   sum += num
//   console.log(sum)
// }

// numbers.forEach((nr) => console.log(nr))


//*Модуль 3 Заняття 6. Деструктуризація та rest/spread
//? Example 1 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }
// // Очікується
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

//? Example 2 - Деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({names, phones}) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//   for (let i = 0; i < nameList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//? Example 3 - Глибока деструктуризація
// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({companyName, bots: {repair: repairBots, defence: defenceBots}}) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// );



//? Example 4 - Деструктуризація
// Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила репорт про кількість товарів на складі будь-якої компанії.

// function getStockReport({ companyName, stock }) {
//   let total = 0
//   for (const value of Object.values(stock)) {
//     total +=value
//   }
//   return `${companyName} has ${total} items in stock`
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"


//! Example 5 - Операція spread
// Доповни функцію createContact(partialContact) так, щоб вона повертала новий об'єкт контакту з доданими властивостями id та createdAt, а також list зі значенням "default" якщо в partialContact немає такої властивості.

// // Рішення
// function createContact(partialContact) {
//   return {
//     list: 'default',
//     ...partialContact,
//     id: generateId(),
//     createdAt: Date.now(),
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }


// Example 6 - Операція rest
// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// // Рішення
// function transformUsername({ firstName, lastName, ...otherProps }) {
//   return {
//     fullName: `${firstName} ${lastName}`,
//     ...otherProps,
//   };
// }

// console.log(
//   transformId({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   }),
// );

// console.log(
//   transformId({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   }),
// );

//*
// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem, ind) {
// 	console.log(elem, ind);
// });

/*массив.map((element, index, array) => {
  // Тіло колбек-функції
});*/
//*
// const planets = ["Земля", "Марс", "Венера", "Юпітер"];
// const planetsToUpperCase = planets.map(el => el.toUpperCase()) 
// console.log(planetsToUpperCase)
// console.log(planets)
// const planetsToLowerCase = planets.map(elem => elem.toLowerCase())
// console.log(planetsToLowerCase)

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Полі", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Ківі", score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
// const scores = students.map(students => students.score)
// console.log(scores)
// let total = 0
// for (const score of scores) {
//   total+= score
// }
// console.log(total)

//*
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
  // Change code below this line
  //*1
//   for (const num of numbers) {
//     if (num > value) {
//     filteredNumbers.push(num)
//   }
  // }
  //*2
  // for (let i = 0; i < numbers.length; i++){
  //   if (numbers[i] > value) {
  //     filteredNumbers.push(numbers[i])
  //   }
  // }
  //*3
  // numbers.forEach(el => {
  //   if(el > value){
  //   filteredNumbers.push(el)
  //   }
  // })

  // Change code above this line
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3))

//*
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
  //*1
//   for (let i = 0; i < firstArray.length; i++){
//     if (secondArray.includes(firstArray[i])) {
//   commonElements.push(firstArray[i])
// }
  //   }
//*2
//     firstArray.forEach(el => {
//       if (secondArray.includes(el)) {
//         commonElements.push(el)
//       }
//     });
  
//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) //12.27.3

//*
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

//*
// // Change code below this line
// const getCommonElements= (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

//*
// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArr = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//      newArr.push(numbers[i] + value)
//     } else {
//            newArr.push(numbers[i])

//     }
//   }
//   return newArr
//   // Change code above this line
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10))//[12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100))

//*
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
//   const planetsLengths = planets.map(el=> el.length);
// console.log(planetsLengths)

//*
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);
// console.log(titles)

//*
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// // Change code below this line
// const getFriends = (users) => {
//   const friendsArr = users.flatMap(friend => friend.friends)
//   const newArr = friendsArr.filter((user, i, arr) => arr.indexOf(user) === i)
//   return newArr
// };

//*Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach
//? Example 1 - Коллбек функції
// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.
// logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль
// logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

// function createProduct(obj, callback) {
//   const newPr = {
//     ...obj, 
//     id: Date.now()
//   }
//   callback(newPr)
// }

// function logProduct(product) {
//   console.log(product)
// }

// function logTotalPrice(product) {
//    console.log(product.price * product.quantity)
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//! Example 2 - Коллбек функції
// Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

// Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

// Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//   }
// }

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//? Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// function each(array, callback) {
//   const newArr = []
//   for (const el of array) {
//     console.log(callback(el))
//   newArr.push(callback(el))
//   }
//   return newArr
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

//? Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// // const logProduct = product => {
// //   console.log(product);
// // }

// const logTotalPrice = product => {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, product => {
//   console.log(product);
// });
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

//! Example 5 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

//? Example 6 - Інлайн стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.
// const each = (array, callback) =>{
//   const newArr = [];
  //*1
  // for (const el of array) {
  //   newArr.push(callback(el));
  // }
  //*2
  // array.forEach(function(el) {
  //   newArr.push(callback(el));
  // })
  //*3
//     array.forEach(el => newArr.push(callback(el)))
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value - 10;
//   }),
// );
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return Math.sqrt(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.ceil(value);
//   }),
// );
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//     return Math.floor(value);
//   }),
// );

//? Example 7 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function logItems(items) {
//   console.log(items);
//*1
  // for (let i = 0; i < items.length; i += 1) {
  //   console.log(`${i + 1} - ${items[i]}`);
  // }
  //*2
//   items.forEach((el, i) => {
//     console.log(`${i + 1} - ${items[i]}`);
//   });
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

//? Example 8 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.
// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');
//*1
  // for (let i = 0; i < nameList.length; i += 1) {
  //   console.log(`${nameList[i]}: ${phoneList[i]}`);
  // }
  //*2
//   nameList.forEach((el, i) => {
//     console.log(`${nameList[i]}: ${phoneList[i]}`)
//   });
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

//? Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

// function calсulateAverage(...args) {
//   let total = 0;
  //*1
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }
  //*2
//   args.forEach((el, i) => {
//   total += args[i];
// })

//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

//* Модуль 4. Заняття 8. Перебираючі методи масиву
// Колекція об'єктів для всіх прикладів з автомобілями
// const cars = [
//   { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
//   { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
//   { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
//   { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
//   { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
//   { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
//   { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
//   { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
//   { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 14, price: 22120, onSale: true },
//   { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
// ];

//? Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = cars => cars.map(el => el.model)
// console.table(getModels(cars));

//? Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) => cars.map(car => ({...car, price: car.price * (1-discount)}))

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//? Example 3 - Метод filter
// Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж значення параметра threshold.

// const filterByPrice = (cars, threshold) => cars.filter(({price})=> price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

//? Example 4 - Метод filter
// Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.

// const getCarsWithDiscount = cars => cars.filter(car => car.onSale);
// console.table(getCarsWithDiscount(cars));

//? Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter(({type: carType}) => carType === type)

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

//? Example 6 - Метод find
// const getCarByModel = (cars, model) => cars.find(({model: carModel}) => carModel === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

//? Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення якості amount.

// const sortByAscendingAmount = cars => [...cars].sort((a, b)=> a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

//? Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a,b)=> b.price- a.price);

// console.table(sortByDescendingPrice(cars));

//? Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.
//*1
// const sortByModel = (cars, order) => [...cars].sort((a, b) => {
//   if (order === 'asc') {
//     return a.model.localeCompare(b.model)
//   } else if (order === 'desc'){
//    return  b.model.localeCompare(a.model)
//   }
//   return 0
// });
//*2
// const sortByModel = (cars, order) => [...cars].sort((a, b) => {
//   switch (order) {
//     case ('asc'):
//       return a.model.localeCompare(b.model)
//     case ('desc'):
//       return b.model.localeCompare(a.model)
//     default:
// return 0
//   }
// });

// console.table(sortByModel(cars, 'asc'));//it must be sort byAscendingModelName
// console.table(sortByModel(cars, 'desc')); //it must be sort byDescendingModelName
// console.table(sortByModel(cars, 'nhn'))


//? Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = cars => cars.reduce((acc, car) =>
//  acc + car.amount ,0);

// console.log(getTotalAmount(cars));

//? Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі. onSale: true

// const getModelsOnSale = cars => cars.filter(({onSale})=> onSale).map(({make})=> make);

// console.table(getModelsOnSale(cars));

//? Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = cars => cars.filter(({onSale})=> onSale).sort((a,b)=> a.price - b.price);

// console.table(getSortedCarsOnSale(cars));


//*
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort((a,b)=> a.localeCompare(b))

// console.log(names)

// //*
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users  => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name)

// console.log(getNamesSortedByFriendCount)

// const myFam = [
//   {
//     name: 'Kotyk',
//     age: 27,

//   },
//   {
//     name: 'Kisa',
//     age: 22,
//   },
//   {
//     name: 'Someone',
//     age: 15,
//   },
//   {
//     name: 'Noone',
//     age:10,
//   }
// ]
// const filteredFam = myFam.filter(fam => fam.age > 20).map(fam => fam.name)
// console.log(filteredFam)
// const mapFam = myFam.map(fam => fam.name)
// // console.log(mapFam)
// const reduceFam = myFam.map(fam => fam.age).reduce((total, fam)=> total + fam, 0)
// // console.log(reduceFam)

//*
//*1
// function getGrade(s1, s2, s3) {
//   const avarage = (s1 + s2 + s3) / 3
//   console.log(avarage)
//   if(90<=avarage){
//     return 'A'
//   } else if (80<=avarage){
//     return 'B'
//   }else if (70<=avarage){
//     return 'C'
//   } else if (60<=avarage){
//     return 'D'
//   } else if (0<=avarage){
//     return 'F'
//   }
// }
// //*2
// function getGrade(s1, s2, s3) {
//   const avarage = (s1 + s2 + s3) / 3
// return avarage>=90 ? 'A' : avarage>= 80 ? 'B' : avarage>=70? 'C' : avarage >=60 ? 'D' : 'F'}
 
//  console.log(getGrade (51, 100, 73))

//*
// function nameShuffler(str){
//   const spl = str.split(' ')
//   const tense = `"${spl[1]} ${spl[0]}"`
//   // const newT = tense.toString()
//   console.log(tense)
// }

// const nameShuffler = str=> str.split(' ').reverse().join(' ')
// console.log(nameShuffler)
// nameShuffler("john McClane") 


//*
// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// console.log(steamGreeter("Манго")); // "Манго, ласкаво просимо в «Steam»."
// console.log(greet.call(steam, 'fd')) //!
// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// console.log(gmailGreeter("Полі")); // "Полі, ласкаво просимо в «Gmail»."

// //*
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: "Манго",
// };
// const poly = {
//   username: "Полі",
// };

// greetGuest.call(mango, "Ласкаво просимо"); // Ласкаво просимо, Манго.
// greetGuest.call(poly, "З прибуттям"); // З прибуттям, Полі.


//*
// class Storage {
//   constructor(items){
//     this.items = items
//   }
//   getItems(){
//     return this.items
//   }
//   addItem(newItem){
//     this.items.push(newItem)
//   }
//   removeItem(itemToRemove){
//     this.items.splice(this.items.indexOf(itemToRemove), 1)
//   }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




//!
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Smartphone", price: 800 },
//   { name: "Tablet", price: 500 },
//   { name: "Camera", price: 1200 },
// ];

// const mostExpensiveProduct = products.reduce((maxProduct, currentProduct) => {
//   if (currentProduct.price > maxProduct.price) {
//     return currentProduct; // If the current product has a higher price, set it as the new maxProduct.
//   }
//   return maxProduct; // Otherwise, keep the current maxProduct.
// }, products[0]); // Initialize maxProduct with the first product.

// console.log("The most expensive product is:", mostExpensiveProduct);

//!
// const students = [
//   { name: "Alice", age: 18, grade: "A" },
//   { name: "Bob", age: 20, grade: "B" },
//   { name: "Carol", age: 18, grade: "A" },
//   { name: "David", age: 19, grade: "C" },
//   { name: "Eve", age: 20, grade: "B" },
// ];

// const groupedByAge = students.reduce((result, student) => {
//   if (!result[student.age]) {
//     result[student.age] = []; // Create an empty array for this age if it doesn't exist yet.
//   }
//   result[student.age].push(student); // Add the student to the array corresponding to their age.
//   return result;
// }, {});

// console.log("Students grouped by age:", groupedByAge);

//*
// function findMult(min, max) {
//   let res =[]
//   for (let i = min; i <= max; i += min)
// {    res.push(i)}
// console.log(res)
// }
// findMult(2, 15)

//*
// const res = x => typeof x === 'string' ? 'Error' : x * 50 + 6
// console.log(res(10))

//*
// const xor = (a, b) => a === b ? false : true
//*2
// const xor = (a,b)=> a!=b
// console.log(xor(true, true))

//*
// function sumStr(a,b) {
  // return String((parseInt(a)|| 0) + (parseInt(b)||0))
  //*2
//   return String(Number(a)+Number(b))
// }

// console.log(sumStr('3', ''))
// console.log(sumStr('', ''))
// console.log(sumStr('3', '5'))

///*
// var countSheep = function (num) {
//   let str = ''
//   for (let i = 1; i <= num; i++){
// str +=`${i} sheep... `
//   }
//   return str
// }

// console.log(countSheep(5))
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------------------THIS
//*1
// function foo(num) {
// 	console.log( "foo: " + num );
// 	// следим, сколько раз вызывается функция
// 	foo.k++;
// }
// foo.k = 0;

// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5) {
// 		foo( i );
// 	}
// }
// // foo: 6// // foo: 7// // foo: 8// // foo: 9
// console.log( foo.k ); // 4// сколько раз `foo` была вызвана?

//*2
// function foo(num) {
// 	console.log( "foo: " + num );
// 	// следим, сколько раз вызывается функция
// 	this.k++;
// }
// foo.k = 0;

// var i;

// for (i=0; i<10; i++) {
// 	if (i > 5) {
// 		foo.call(foo, i );
// 	}
// }
// // foo: 6// foo: 7// foo: 8// foo: 9
// console.log( foo.k ); // 4// сколько раз `foo` была вызвана?

//*
// function baz() {
//     // стек вызовов: `baz`
//     // поэтому наша точка вызова — глобальная область видимости

//     console.log( "baz" );
//     bar(); // <-- точка вызова для `bar`
// }

// function bar() {
//     // стек вызовов: `baz` -> `bar`
//     // поэтому наша точка вызова в `baz`

//     console.log( "bar" );
//     foo(); // <-- точка вызова для `foo`
// }

// function foo() {
//   debugger
//     // стек вызовов: `baz` -> `bar` -> `foo`
//     // поэтому наша точка вызова в `bar`

//     console.log( "foo" );
// }
// baz(); // <-- точка вызова для `baz`

//*
// function foo() {
// 	console.log( this.a );
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var bar = obj.foo; // ссылка/алиас на функцию!

// var a = "ой, глобальная"; // `a` также и свойство глобального объекта

// bar(); // "ой, глобальная"
// console.log(obj.a)

//*
// function foo() {
//   debugger
// 	console.log( this.a );
// }

// function doFoo(fn) {
  
// 	// `fn` — просто еще одна ссылка на `foo`

// 	fn(); // <-- точка вызова!
// }

// var obj = {
// 	a: 2,
// 	foo: foo
// };

// var a = "ой, глобальная"; // `a` еще и переменная в глобальном объекте

// doFoo(obj.foo); // "ой, глобальная"


//*
// function foo(something) {
// 	console.log( this.a, something );
// 	return this.a + something;
// }

// var obj = {
// 	a: 2
// };

// var bar = function() {
// 	return foo.apply( obj, arguments );
// };

// var b = bar( 3 ); // 2 3
// console.log( b ); // 5



//!!!!!!!!!!---------------DOM
/*elem.parentNode - вибере батьківський elem.
elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).*/

// console.log(document);
// console.log(document.body);
// const list = document.querySelector('.list')
// console.log(list);
// const listFirstElItem = list.firstElementChild
// console.log(listFirstElItem)
// const listLastElItem = list.lastElementChild
// console.log(listLastElItem)
// const listItems = list.children
// console.log(listItems);


//*

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '30px'

// console.log(listWithId);

// const listWithClass = document.querySelector('.menu')
// console.log(listWithClass)

// const menuItemsByTagName = document.querySelectorAll('li')
// console.log(menuItemsByTagName)

// const menuItemsByClass = document.querySelectorAll('.menu-item')
// console.log(menuItemsByClass)

// const firstMenuItem = document.querySelector('.menu-item')
// console.log(firstMenuItem)
// firstMenuItem.style.color = 'red'

// const image = document.querySelector('.image')
// console.table(image.src)
// image.src = "https://picsum.photos/id/13/640/480"
// image.alt = 'River'


// const textEl = document.querySelector('.article-text')
// console.log(textEl)
// console.log(textEl.textContent)
// textEl.style.color = "red"

// const titleEl = document.querySelector('.article-title')
// titleEl.textContent = 'Hey you'

/* <a class="link is-active" href="">A random link</a> */
// const linki = document.querySelector('.link')
// console.log(linki.classList)

// const hasActiveClass = linki.classList.contains('is-active')
// console.log(hasActiveClass)

// linki.classList.add('special')
// console.log(linki.classList)

// linki.classList.remove('is-active')
// console.log(linki.classList)

// linki.classList.replace('special', 'top')
// console.log(linki.classList)
//*
// const button = document.querySelector('.btn')
// console.log(button)
// button.style.backgroundColor = 'red'
// button.style.padding ='20px'
// console.log(button.style)
//*
//<img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" />

// const image = document.querySelector('.image')
// console.log(image.attributes)
// console.log(image.hasAttribute('alt'))
// console.log(image.getAttribute('alt'))
// console.log(image.getAttribute('src'))
// image.setAttribute('alt', 'amazing')
// console.log(image.getAttribute('alt'))

//*
// const saveBtn = document.querySelector('.editor button[data-action = "save"]')
// console.log(saveBtn.dataset.action)

// const closeBtn = document.querySelector('.editor button[data-action = "close"')
// console.log(closeBtn.dataset.action)
//*
// const headTitle = document.createElement('h1')
// headTitle.textContent = 'hello World'
// console.log(headTitle)
//*
/*<div class="container">
  <ul class="usernames">
    <li>Mango</li>
  </ul>
</div>*/
const list = document.querySelector('.usernames')
const lastItem = document.createElement('li')
lastItem.textContent = 'Kate'
list.append(lastItem)

const firstItem = document.createElement('li')
firstItem.textContent = 'Boris'
list.prepend(firstItem)

const title = document.createElement('h1')
title.textContent = 'Usernames'
list.before(title)
title.style.color = 'red'
title.style.textAlign = 'center'

const p = document.createElement('p')
p.textContent = 'Lore hbacdkj bkjxlb bjdkj lmcbv'
list.after(p)