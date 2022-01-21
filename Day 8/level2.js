const users = {
	Alex: {
		email: "alex@alex.com",
		skills: ["HTML", "CSS", "JavaScript"],
		age: 20,
		isLoggedIn: false,
		points: 30,
	},
	Asab: {
		email: "asab@asab.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"Redux",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 25,
		isLoggedIn: false,
		points: 50,
	},
	Brook: {
		email: "daniel@daniel.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
		age: 30,
		isLoggedIn: true,
		points: 50,
	},
	Daniel: {
		email: "daniel@alex.com",
		skills: ["HTML", "CSS", "JavaScript", "Python"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	John: {
		email: "john@john.com",
		skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
		age: 20,
		isLoggedIn: true,
		points: 50,
	},
	Thomas: {
		email: "thomas@thomas.com",
		skills: ["HTML", "CSS", "JavaScript", "React"],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
	Paul: {
		email: "paul@paul.com",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"MongoDB",
			"Express",
			"React",
			"Node",
		],
		age: 20,
		isLoggedIn: false,
		points: 40,
	},
};

const mernStack = ["MongoDB", "Express", "React", "Node"];

// Count logged in users, count users having greater than equal to 50 points from the following object.
let signedIn = 0;
let points = 0;
for (let [key, value] of Object.entries(users)) {
	if (value.isLoggedIn == true) {
		signedIn++;
	}
	if (value.points >= 50) {
		points++;
	}
}

console.log(signedIn);
console.log(points);

// Find people who are MERN stack developer from the users object
let person = [];
for (let [key, value] of Object.entries(users)) {
	if (mernStack.every(it => value.skills.includes(it))) {
		person.push(key);
	}
}

console.log(person);

// Get all keys or properties of users object
let usersList = [];
for (let [key] of Object.entries(users)) {
	usersList.push(key);
}

console.log(usersList);

// Get all the values of users object
let valueList = [];
for (let[key, value] of Object.entries(users)) {
	valueList.push(value);
}

console.log(valueList);

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
	Vietnam: {
		capital: 'Hanoi',
		population: 8053663,
		language: 'Vietnamese'
	}
}

console.log(countries);