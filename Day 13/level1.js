// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

let num = text.match(/[0-9]+/g,);

num;

let sum = 0;

sum = num[0] * 12 + parseInt(num[1]) + num[2] * 12;

console.log(sum);

// Write a pattern which identify if a string is a valid JavaScript variable
let string = 'abcdas'

function is_valid_var(string) {
	return typeof(string) == 'string';
}

console.log(is_valid_var(string));