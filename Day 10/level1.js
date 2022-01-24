const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// Create an empty set
const empty = new Set();

empty;

// Create a set containing 0 to 10 using loop
const ten = [];

for (let index = 0; index <= 10; index++) {
	ten.push(index);
}

const setTen = new Set(ten);

setTen;

// Remove an element from a set

setTen.delete(0);

setTen;

// Clear a set

setTen.clear();

setTen;

// Create a set of 5 string elements from array
const fiveSet = new Set();

fiveSet.add('one');
fiveSet.add('two');
fiveSet.add('three');
fiveSet.add('four');
fiveSet.add('five');

fiveSet;

// Create a map of countries and number of characters of a country
const countriesSet = new Set();

countriesSet.add(['Vietnam', 'Vietnam'.length]);

countriesSet;