// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for
for (let index = 0; index <= 10; index++) {
	console.log(index);
}

// while
let i = 0;
while (i <= 10) {
	console.log(i);
	i++;
}

// do-while
let ind = 0;
do {
	console.log(ind);
	ind++;
} while (ind <= 10);

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for
for (let index = 10; index >= 0; index--) {
	console.log(index);
}

// while
let indbk = 10;
while (indbk >= 0) {
	console.log(indbk);
	indbk--;
}

let indwhile = 10;
do {
	console.log(indwhile);
	indwhile--;
} while (indwhile >= 0);

// Write a loop that makes the following pattern using console.log():
/*
	#
    ##
    ###
    ####
    #####
    ######
    #######
*/
let ptn = '#';
for (let index = 1; index <= 6; index++) {
	console.log('\n' + ptn.repeat(index));
}

// Use loop to print the following pattern:
/*
	0 x 0 = 0
	1 x 1 = 1
	2 x 2 = 4
	3 x 3 = 9
	4 x 4 = 16
	5 x 5 = 25
	6 x 6 = 36
	7 x 7 = 49
	8 x 8 = 64
	9 x 9 = 81
	10 x 10 = 100
*/
for (let index = 0; index <= 10; index++) {
	console.log(index + ' x ' + index + ' = ' + `${index * index}`);
}

// Using loop print the following pattern
/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/

console.log('i  i^2  i^3');
for (let index = 0; index <= 10; index++) {
	console.log(`${index}  ${Math.pow(index, 2)}  ${Math.pow(index, 3)}`);	
}

// Use for loop to iterate from 0 to 100 and print only even numbers
for (let index = 0; index <= 100; index++) {
	if(index % 2 == 0) console.log(index);
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let index = 0; index <= 100; index++) {
	if(index % 2 != 0) console.log(index);
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
function isPrime(num) {
	if (num < 2) {
		return false;
	} else {
		let count = 0;
		for (let index = 2; index <= Math.sqrt(num); index++) {
			if (num % index == 0) {
				count++;
			}
		}
		if (count != 0) {
			return false;
		} else {
			return true;
		}
	}
}

for (let index = 0; index <= 100; index++) {
	if(isPrime(index)) console.log(index);
}

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sumTotals = 0;
for (let index = 0; index <= 100; index++) {
	sumTotals += index;
}

console.log(`The sum of numbers from 0 to 100 is ` + sumTotals);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let sumEven = 0;
for (let index = 0; index <= 100; index++) {
	if(index % 2 == 0) sumEven += index;
}

let sumOdds = 0;
for (let index = 0; index <= 100; index++) {
	if(index % 2 != 0) sumOdds += index;
}

console.log(`The sum of evens from 0 to 100 is ` + sumEven + '. And the sums of odds from 0 to 100 is ' + sumOdds);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
const evenOdds = [sumEven, sumOdds];
console.log(evenOdds);

// Develop a small script which generate array of 5 random numbers
let randomNumber = [];
for (let index = 1; index <= 5; index++) {
	randomNumber.push(Math.random());
}
console.log(randomNumber);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
randomNumber = [];
let rnd = 0;
for (let index = 1; index <= 5; index++) {
	rnd = Math.random();
	if (index > 2) {
		while (rnd == randomNumber[index - 1]) {
			rnd == Math.random();
		}
		randomNumber.push(rnd);
	} else {
		randomNumber.push(rnd);
	}
}
console.log(randomNumber);

// Develop a small script which generate a six characters random id:
var crypto = require('crypto');
console.log(crypto.randomBytes(3).toString('hex'));
