// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he neds to turn 18.
let myAge = prompt("Enter age:");
while (isNaN(myAge)) {
	myAge = prompt("Input is not a Number! Enter age:");
}
console.log(myAge >= 18 ? "You are old enough to drive" : `You are left with ${parseInt(18) - parseInt(myAge)} years to drive`);

// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
let yourAge = prompt("Enter your age:");
while (isNaN(yourAge)) {
	yourAge = prompt("Input is not a Number! Enter your age:");
}
console.log(yourAge > myAge ? `You are ${parseInt(yourAge) - parseInt(myAge)} years older than me` : `You are ${parseInt(myAge) - parseInt(yourAge)} years younger than me`);

/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
	using if else
	ternary operator.
*/
// using if-else
let a = 4
let b = 3
if (a > b) {
	console.log("a is greater than b");
} else {
	console.log("a is less than b");
}

// using ternary
console.log(a > b ? "a is greater than b" : "a is less than b");

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
let chk = prompt("Enter a number:");
while (isNaN(chk)) {
	chk = prompt("Input is not a Number! Enter a number:");
}
console.log(parseInt(chk) % 2 === 0 ? `${chk} is even` : `${chk} is odd`);
