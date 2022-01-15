// Declare an empty array;
const arr1 = [];

// Declare an array with more than 5 number of elements
const arr2 = ['a', 'b', 'c', 'd', 'e'];

// Find the length of your array
console.log(arr2.length);

// Get the first item, the middle item and the last item of the array
console.log(arr2[0]); //First
console.log(arr2[3]); //Middle
console.log(arr2[arr2.length - 1]); //Last

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['a', 1, false, 'b', 2, undefined];

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon'];

// Print the array using console.log()
console.log(itCompanies);

// Print the number of companies in the array
console.log(itCompanies.length)

// Print the first company, middle and last company
console.log(itCompanies[0]); //First
console.log(itCompanies[3]); //Middle
console.log(itCompanies[itCompanies.length - 1]); //Last

// Print out each company
itCompanies.forEach(it => console.log(it));

// Change each company name to uppercase one by one and print them out
itCompanies.forEach(it => {it = it.toUpperCase(); console.log(it)});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let str = '';
for (let index = 0; index < itCompanies.length - 2; index++) {
	str += itCompanies[index] + ', ';	
}
str += ` ${itCompanies[itCompanies.length - 2]} and ${itCompanies[itCompanies.length - 1]} are big IT companies`
console.log(str);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let name = 'Oracle';
console.log(itCompanies.includes(name) ? `The company exists` : `The company doesn't exists`);

// Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach(it => {if(it.match(/[o].{2}/)) console.log(it)});

// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4));

// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(2,5));

// Remove the first IT company from the array
console.log(itCompanies.splice(0,1));

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(1,3));

// Remove the last IT company from the array
console.log(itCompanies.splice(itCompanies.length - 1, 1));

// Remove all IT companies
console.log(itCompanies.splice());
