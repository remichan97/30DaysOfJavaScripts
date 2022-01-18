const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
const userIdGenerator = (times) => {
	let id ='';

	for (let index = 0; index < times; index++) {
		id += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}

	return id;
}

const userIdGeneratedByUser = () => {
	let times = prompt("How many IDs you wishes to generate?");
	let length = prompt("How long does the generated ID shouldd be?");

	let id = [];

	for (let index = 0; index < times; index++) {
		id.push(userIdGenerator(times));
	}
	return id;
}

console.log(userIdGeneratedByUser());

// Write a function name rgbColorGenerator and it generates rgb colors.
const rgbColorGenerator = () => {
	let rbg = [];

	for (let index = 0; index < 3; index++) {
		rbg.push(Math.floor(Math.random() * 256));
	}

	return rbg;
}

console.log(rgbColorGenerator());

