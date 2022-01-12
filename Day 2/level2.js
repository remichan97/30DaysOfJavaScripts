// Use console.log() to print a statement
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// Use console.log() to print a statement by Mother Theresa
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10' === 10); // Returned false
console.log(typeof '10' === 'string'); // should returns true

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8') == 10); // Returned false
console.log(parseInt('9.8') + 1 == 10); // should returns true

// Check if 'on' is found in both python and jargon
let string1 = 'python';
let string2 = 'jargon';
console.log(string1.includes('on') && string2.includes('on'));

// I hope this course is not full of jargon. Check if jargon is in the sentence.
let string3 = "I hope this course is not full of jargon";
console.log(string3.includes('jargon'));

// Generate a random number between 0 and 100 inclusively.
let rnd100 = Math.random();
console.log(Math.floor(rnd100 * 101));

// Generate a random number between 50 and 100 inclusively.
/*
	- Know the range of random (in this case: the range is 50) then add 1 to the equation
	- Multiple the random with the equation above, then add the minimum number to the result
	- Get the floor of the number above to get the final number 
*/
let rnd50 = Math.random();
console.log(Math.floor(rnd50 * 51) + 50);

// Generate a random number between 0 and 255 inclusively.
let rnd255 = Math.random();
console.log(Math.floor(rnd255 * 256));

// Access the 'JavaScript' string characters using a random number.
let rnd = Math.random();
let str = "JavaScript";
let ind = Math.floor(rnd * (str.length - 1));
let char = str[ind];
console.log(char);

/*
	Use console.log() and escape characters to print the following pattern.

	1 1 1 1 1
	2 1 2 4 8
	3 1 3 9 27
	4 1 4 16 64
	5 1 5 25 125
*/
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125")

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string4 = "You cannot end a sentence with because because because is a conjunction";
console.log(string4.substring(string4.indexOf('because'), string4.lastIndexOf('because') + 7));