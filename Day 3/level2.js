const date = new Date();

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt("Enter base: ");
while (isNaN(base)) {
	base = prompt("Input is Not a Number! Enter base: ")
}
let height = prompt("Enter height: ");
while (isNaN(height)) {
	height = prompt("Input is Not a Number! Enter height: ")
}
console.log(0.5 * base * height);

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let a = prompt("Enter side a: ");
while (isNaN(a)) {
	a = prompt("Input is Not a Number! Enter side a: ")
}
let b = prompt("Enter side b: ");
while (isNaN(b)) {
	b = prompt("Input is Not a Number! Enter side b: ")
}
let c = prompt("Enter side c: ");
while (isNaN(c)) {
	c = prompt("Input is Not a Number! Enter side c: ")
}
console.log(a + b + c);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = prompt("Enter length: ");
while (isNaN(length)) {
	length = prompt("Input is Not a Number! Enter length: ")
}
let width = prompt("Enter width: ");
while (isNaN(width)) {
	width = prompt("Input is Not a Number! Enter width: ")
}
console.log("Area:" , length * width);
console.log("Perimeter:" , 2 * (parseInt(length) + parseInt(width)));

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let pi = Math.PI;
let r = prompt("Enter radius: ");
while (isNaN(r)) {
	r = prompt("Input is Not a Number !Enter radius: ");
}
console.log("Area:" (pi * r * r));
console.log("Circumference:" (2 * pi * r));

// Calculate the slope, x-intercept and y-intercept of y = 2x - 2
let slope = 2;
console.log("x-intercept: ", 2 / 2);
console.log("y-intercept: ", 2 - 2);


// Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let rs = (parseInt(y2) - parseInt(y1)) / (parseInt(x2) - parseInt(x1))
console.log(rs);

// Compare the slope of above two questions.
console.log(slope === rs);

// Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = prompt("Enter x:");
while (isNaN(x)) {
	x = prompt("Input is Not a Number !Enter x:");
}
console.log("y = ", (Math.pow(x, 2) + (6 * x) + 9));

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = prompt("Enter hours:");
while (isNaN(hours)) {
	hours = prompt("Input is Not a Number! Enter hours:");
}
let rate = prompt("Enter rate:");
while (isNaN(hours)) {
	rate = prompt("Input is Not a Number! Enter rate:");
}
console.log(hours * rate);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
let myName = prompt("Enter your name:");
console.log(myName.length > 7 ? "My name is long" : "My name is short");

// Compare your first name length and your family name length and you should get this output.

// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'

// Your first name, Asabeneh is longer than your family name, Yetayeh
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

console.log(firstName.length > lastName.length ? "First name is longer than family name" : firstName.length < lastName.length ? "First name is shorter than family name" : "Both are equal");

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25

console.log(myAge > yourAge ? "I am " + (myAge - yourAge) + " older than you" : myAge < yourAge ? "I am " + (yourAge - myAge) + " younger than you" : "We are the same age");

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let born = prompt("Enter year of born:");
while (isNaN(born)) {
	born = prompt("Input is Not a Number! Enter year of born:");
}
console.log(parseInt(date.getFullYear()) - parseInt(born) >= 18 ? "You are old enough to drive" : "You have to wait " + parseInt(date.getFullYear()) - parseInt(born) + " more years to drive");

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let year = prompt("Enter year:");
while (isNaN(year)) {
	year = prompt("Input is Not a Number! Enter year:");
}

console.log(year * 24 * 60 * 60);


/*
Create a human readable time format using the Date time object

	YYYY-MM-DD HH:mm
	DD-MM-YYYY HH:mm
	DD/MM/YYYY HH:mm
*/
const d = date.getDate();
const m = date.getMonth() + 1;
const y = date.getFullYear();
const h = date.getHours();
const min = date.getMinutes();

console.log(`${y}-${m}-${d} ${h}:${m}`);
console.log(`${d}-${m}-${y} ${h}:${m}`);
console.log(`${d}/${m}/${y} ${h}:${m}`);