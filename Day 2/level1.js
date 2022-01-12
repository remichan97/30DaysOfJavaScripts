let challenge = "30 Days Of JavaScript";
let newString = "You cannot end a sentence with because because because is a conjunction";
// Print the string
console.log(challenge);

// Print the length
console.log(challenge.length);

// Uppercase the string
console.log(challenge.toUpperCase());

// Lowercase the string
console.log(challenge.toLowerCase());

// Cut out the first word
console.log(challenge.substring(3, 7));

// Slice out the last part of the string
console.log(challenge.substring(3, challenge.length));

// Check whether a phrase in the string
console.log(challenge.includes("Script"));

// Split into array
console.log(challenge.split());

// Split into array at the space
console.log((challenge.split(" ")));

// Split the string at the comma
let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(company.split(","));

// Replace strings
console.log(challenge.replace('JavaScript', 'Python'));

// Character at index 15
console.log(challenge.charAt(15));

// Character code of J in given string
console.log(challenge.charCodeAt(challenge.indexOf('J')));

// use indexOf
console.log(challenge.indexOf('a'));

// use lastIndexOf
console.log(challenge.lastIndexOf('a'));

// First occurence of a string
console.log(newString.indexOf('because'));

// Last occurence of a string
console.log(newString.lastIndexOf('because'));

// Use 'search'
console.log(newString.search('because'));

// Trim whitespace
console.log(challenge.trim());

// use startWith and output result true
console.log(challenge.startsWith('30'));

// use endWith and output result true
console.log(challenge.endsWith('t'));

// use 'match'
console.log(challenge.match(/a/gi)); 
// This is a Regular Expression, it means find all occurence of 'a' with 2 flags:
//  - g : Search the whole string
//  - i : Search with case insensitive

// Merge two strings to make a singular one
let string1 = "30 Days of";
let string2 = "JavaScript";
console.log(string1.concat(' ', string2));

// Print a string twice
console.log(challenge.repeat(2));