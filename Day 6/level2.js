const alphabet =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const countries = [
	"Albania",
	"Bolivia",
	"Canada",
	"Denmark",
	"Ethiopia",
	"Finland",
	"Germany",
	"Hungary",
	"Ireland",
	"Japan",
	"Kenya",
];

const webTechs = [
	"HTML",
	"CSS",
	"JavaScript",
	"React",
	"Redux",
	"Node",
	"MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Develop a small script which generate any number of characters random id:
let rnd = "";
let size = 5;

for (let index = 0; index < size; index++) {
	rnd += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
console.log(rnd);

// Write a script which generates a random hexadecimal number.
let hex = "#";
for (let index = 0; index < 6; index++) {
	hex += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}
console.log(hex);

// Write a script which generates a random rgb color number.
let rbg = [];
for (let index = 0; index < 3; index++) {
	rbg.push(Math.floor(Math.random() * 256));
}
console.log(rbg);

// Using the above countries array, create the following new array.
let upper = [];
countries.forEach((it) => upper.push(it.toUpperCase()));

console.log(upper);

// Using the above countries array, create an array for countries length'.
let eleLength = [];
upper.forEach((it) => eleLength.push(it.length));

console.log(eleLength);

// Use the countries array to create the following array of arrays:
let prefix = [];
upper.forEach((it) => prefix.push(it.substring(0, 3)));

for (let index = 0; index < countries.length; index++) {
	console.log(`${countries[index]}, ${prefix[index]}, ${eleLength[index]}`);
}

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
let land = [];
countries.forEach((it) => {
	if (it.includes("land")) land.push(it);
});
land.length > 0 ? console.log(land) : `No countries`;

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
let ia = [];
countries.forEach((it) => {
	if (it.includes("ia")) ia.push(it);
});
ia.length > 0 ? console.log(ia) : `No result`;

// Using the above countries array, find the country containing the biggest number of characters.
let maxindex = 0,
	max = eleLength[0];
for (let index = 0; index < eleLength.length; index++) {
	if (max < eleLength[index]) maxindex = index;
}
console.log(countries[maxindex]);

// Using the above countries array, find the country containing only 5 characters.
countries.forEach((it) => {
	if (it.length == 5) console.log(it);
});

// Find the longest word in the webTechs array
let webLength = [];
webTechs.forEach((it) => webLength.push(it.length));

let maxint = 0;
maxtech = webLength[0];
for (let index = 0; index < webLength.length; index++) {
	if (maxtech < webLength[index]) maxint = index;
}
console.log(webTechs[maxint]);

// Use the webTechs array to create the following array of arrays:
let detail = [];
webTechs.forEach((it) => detail.push([it, it.length]));
console.log(detail);

// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let acr = [];
mernStack.forEach((it) => acr.push(it.substring(0, 1)));
console.log(acr.join(""));

// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const ex14 = [
	"HTML",
	"CSS",
	"JS",
	"React",
	"Redux",
	"Node",
	"Express",
	"MongoDB",
];
// for
for (let index = 0; index < ex14.length; index++) {
	console.log(ex14[index]);
}

// forof
for (const iterator of ex14) {
	console.log(iterator);
}

// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const ex15 = ["banana", "orange", "mango", "lemon"];
let reversed = [];
for (let index = ex15.length - 1; index >= 0; index--) {
	reversed.push(ex15[index]);
}
console.log(reversed);

/*
Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]

  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB
*/
const fullStack = [
	["HTML", "CSS", "JS", "React"],
	["Node", "Express", "MongoDB"],
];

fullStack.forEach(it => {it.forEach(a => console.log(a))});