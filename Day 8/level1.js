// Create an empty object called dog
let dog = {};

// Print the the dog object on the console
console.log(dog);

// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog = {
	name: 'Sparky',
	legs:  4,
	colour: 'black',
	bark : () => {
		return 'woof woof';
	}
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.bark());
console.log(dog.legs);
console.log(dog.name);
console.log(dog.colour);

// Set new properties the dog object: breed, getDogInfo
dog.breed = 'Chihuahua';
dog.getDogInfo = function () {
	console.log(dog);
}

dog.getDogInfo();