// Declare a function fullName and it print out your full name.
function fullName(myName) {
	console.log(myName);
}

fullName("Truong Vu Binh");

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}
console.log(fullName("Truong", "Vu Binh"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (num1, num2) => {
	return parseInt(num1) + parseInt(num2);
};
console.log(addNumbers(2, 2));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
	return length * width;
};
console.log(areaOfRectangle(2, 4));

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (length, width) => {
	return 2 * (parseInt(length) + parseInt(width));
};
console.log(perimeterOfRectangle(2, 5));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism = (length, width, height) => {
	return length * width * height;
};
console.log(volumeOfRectPrism(1, 2, 3));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle = (r) => {
	return Math.PI * Math.pow(r, 2);
};
console.log(areaOfCircle(2));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r) => {
	return 2 * Math.PI * r;
};
console.log(circumOfCircle(3));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density = (mass, volume) => {
	return mass / volume;
};
console.log(density(2, 4));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
const speed = (dist, time) => {
	return dist / time;
};
console.log(speed(150, 25));

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
	return mass / gravity;
};
console.log(weight(255, 50));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
const convertCelciusToFahrenheit = (oC) => {
	return (oC * 9) / 5 + parseInt(32);
};
console.log(convertCelciusToFahrenheit(14));

/*
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

	The same groups apply to both men and women.
	Underweight: BMI is less than 18.5
	Normal weight: BMI is 18.5 to 24.9
	Overweight: BMI is 25 to 29.9
	Obese: BMI is 30 or more
*/
const bmi = (weight, height) => {
	let rs;
	rs = weight / Math.pow(height, 2);
	console.log(rs);
	let b = "";
	if (rs < 18.5) {
		b = "underweight";
	} else if (rs >= 18.5 && rs < 24.9) {
		b = "normal";
	} else if (rs >= 25 && rs < 29.9) {
		b = "overweight";
	} else {
		b = "obese";
	}
	return b;
};

console.log(bmi(65, 1.7));

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const checkSeason = (season) => {
	switch (season) {
		case 'January': case 'February': case 'December':
			return 'Winter';
		case 'March': case 'April': case 'May':
			return 'Spring';
		case 'June': case 'July': case 'August':
			return 'Summer';
		default:
			return 'Autumn';
	}
}

console.log(checkSeason('January'));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (num1, num2, num3) => {
	return Math.max(num1, Math.max(num2, num3));
}

console.log(findMax(0, 10, 5));
