// First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
console.log(text.split(/\W+/,13));
console.log(text.split(/\W+/, 13).length);

/*
In the following shopping cart add, remove, edit items
	add 'Meat' in the beginning of your shopping cart if it has not been already added
	add Sugar at the end of you shopping cart if it has not been already added
	remove 'Honey' if you are allergic to honey
	modify Tea to 'Green Tea'
*/
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
shoppingCart.includes('Meat') ? console.log(shoppingCart) : console.log(shoppingCart.push('Meat'));

// add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.includes('Sugar') ? console.log(shoppingCart) : console.log(shoppingCart.push('Sugar'));

// remove 'Honey' if you are allergic to honey
shoppingCart.includes('Honey') ? shoppingCart.splice(shoppingCart.indexOf('Honey'), 1) : console.log(shoppingCart);

// modify Tea to 'Green Tea'
shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea';
console.log(shoppingCart);

// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
countries.includes('Ethiopia') ? console.log(countries[countries.indexOf('Ethiopia')].toUperCase()) : countries.push('Ethiopia');

// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass'), console.log(webTechs);

/*
Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
console.log(frontEnd.concat(backEnd));