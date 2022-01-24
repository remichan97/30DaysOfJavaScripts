const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
	{ product: "banana", price: 3 },
	{ product: "mango", price: 6 },
	{ product: "potato", price: " " },
	{ product: "avocado", price: 8 },
	{ product: "coffee", price: 10 },
	{ product: "tea", price: "" },
];

// Use forEach to console.log each country in the countries array.
countries.forEach(it=> console.log(it));

// Use forEach to console.log each name in the names array.
names.forEach(it=> console.log(it));

// Use forEach to console.log each number in the numbers array.
numbers.forEach(it => console.log(it));

// Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map(it => it.toUpperCase());

newCountries;

// Use map to create an array of countries length from countries array.
const countriesLength = countries.map(it => it.length);

countriesLength;

// Use map to create a new array by changing each number to square in the numbers array
const allSquare = numbers.map(it => Math.sqrt(it));

allSquare;

// Use map to change to each name to uppercase in the names array
const uppercaseNames = names.map(it => it.toUpperCase());

uppercaseNames;

// Use map to map the products array to its corresponding prices.
const maroducts = products.map(it => it.price);

maroducts;

// Use filter to filter out countries containing land.
const landCountries = countries.filter(it => it.includes('land'));

landCountries;

// Use filter to filter out countries having six character.
const sixChar = countries.filter(it => it.length == 6);

sixChar;

// Use filter to filter out countries containing six letters and more in the country array.
const sixOrMore = countries.filter(it => it.length >= 6);

sixOrMore;

// Use filter to filter out country start with 'E';
const startE = countries.filter(it => it.startsWith('E'));

startE;

// Use filter to filter out only prices with values.
const values = products.filter(it => it.price != '');

values;

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(...arg) {
	return arg.filter(it => typeof(it) == 'string');
}

// Use reduce to sum all the numbers in the numbers array.
let sumOfNumber = numbers.reduce((a,b) => {return (a + b + 0)});

sumOfNumber;

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const stringConcat = countries.reduce((a,b) => {return a + ',' + ' ' +  b});

console.log(stringConcat,'are north European countries');

// Use some to check if some names' length greater than seven in names array
const sevenGreater = names.some(it => it.length >= 7);

sevenGreater;

// Use every to check if all the countries contain the word land
const allLand = countries.every(it => it.includes('land'));

allLand;

// Use findIndex to find the position of the first country containing only six letters in the countries array
const firstIndex = countries.findIndex(it => it.length == 6);

firstIndex;

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayPos = countries.findIndex(it => it == 'Norway');

norwayPos;

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const rusPos = countries.findIndex(it => it == 'Russia');

rusPos;