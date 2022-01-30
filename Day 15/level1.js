// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
	constructor(names, age, color, legs) {
		this.names = names;
		this.age = age;
		this.color = color;
		this.legs = legs;
	}
	getAnimalProp() {
		const info = this.names + this.age + this.color + this.legs;
		return info;
	}
}

const an = new Animal();
console.log(an);

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
	
}

class Cat extends Animal {

}
