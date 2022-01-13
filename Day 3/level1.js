// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let ex1 = [
	firstName = "Binh",
	lastName = "Truong Vu",
	country = "Vietnam",
	city = "Hanoi",
	age = 24,
	isMarried = false,
]

ex1.forEach(it => console.log(typeof(it)));

// Check if type of '10' is equal to 10
console.log('10' === 10); //Returned false

// Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == false); //Returned false

/*
Boolean value is either true or false.
	Write three JavaScript statement which provide truthy value.
	Write three JavaScript statement which provide falsy value.
*/
let truthy = [true, 1, "Binh"];
let falsy = [null, undefined, NaN];

/*
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

	4 > 3
	4 >= 3
	4 < 3
	4 <= 3
	4 == 4
	4 === 4
	4 != 4
	4 !== 4
	4 != '4'
	4 == '4'
	4 === '4'
	Find the length of python and jargon and make a falsy comparison statement.
*/
// 4 > 3 should returned true:
console.log(4 > 3);

// 4 >= 3 should returned true:
console.log(4 >= 3);

// 4 < 3 should returned false:
console.log(4 < 3);

// 4 <= 3 should returned false
console.log(4 <= 3);

// 4 == 4 should returned true
console.log(4 == 4);

// 4 === 4 should returned true
console.log(4 === 4);

// 4 != 4 should returned false
console.log(4 != 4);

// 4 !== 4 should returned false
console.log(4 !== 4);

// 4 != '4' should returned false
console.log(4 != '4');

// 4 == '4' should returned true
console.log(4 == '4');

// 4 === '4' should returned false
console.log(4 === '4');

// Find the length of python and jargon and make a falsy comparison statement.
let str1 = "python";
let str2 = "jargon"
console.log(str1.length < str2.length);

/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

	4 > 3 && 10 < 12
	4 > 3 && 10 > 12
	4 > 3 || 10 < 12
	4 > 3 || 10 > 12
	!(4 > 3)
	!(4 < 3)
	!(false)
	!(4 > 3 && 10 < 12)
	!(4 > 3 && 10 > 12)
	!(4 === '4')
	There is no 'on' in both dragon and python
*/
// 4 > 3 && 10 < 12 should returned true
console.log(4 > 3 && 10 < 12);

// 4 > 3 && 10 > 12 should returned false
console.log(4 > 3 && 10 > 12);

// 4 > 3 || 10 < 12 should returned true
console.log(4 > 3 || 10 < 12);

// 4 > 3 || 10 > 12 should returned true
console.log(4 > 3 || 10 > 12);

// !(4 > 3) should returned false
console.log(!(4 > 3));

// !(4 < 3) should returned true
console.log(!(4 < 3));

// !(false) should returned true
console.log(!(false));

// !(4 > 3 && 10 < 12) should returned false
console.log(!(4 > 3 && 10 < 12));

// !(4 > 3 && 10 > 12) should returned true
console.log(!(4 > 3 && 10 > 12));

// !(4 === '4') should returned true
console.log(!(4 === '4'));

// "There is no 'on' in both dragon and python" should returned false
let str3 = 'dragon';
let str4 = 'python';
console.log(!(str3.includes('on') && str4.includes('on')));

/*
Use the Date object to do the following activities

	What is the year today?
	What is the month today as a number?
	What is the date today?
	What is the day today as a number?
	What is the hours now?
	What is the minutes now?
	Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/
const d = new Date();

// What is the year today?
console.log(d.getFullYear());

// What is the month today as a number?
console.log(d.getMonth() + 1);

// What is the date today?
console.log(d.getDate());

// What is the day today as a number?
console.log(d.getDay() + 1);

// What is the hours now?
console.log(d.getHours());

// What is the minutes now?
console.log(d.getMinutes());

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(d.getTime())