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

// Override the method you create in Animal class
class Dog extends Animal {
	super(names, age, color, age);
	getAnimalProp() {
		const a = this.names + this.ages;
		return a;
	}
}