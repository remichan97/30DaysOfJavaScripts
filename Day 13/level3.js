const users = [
	{
		name: "Asabeneh",
		title: "Programmer",
		country: "Finland",
		city: "Helsinki",
		age: 250,
	},
	{
		name: "Eyob",
		title: "Teacher",
		country: "Sweden",
		city: "London",
		age: 25,
	},
	{
		name: "Asab",
		title: "Instructor",
		country: "Norway",
		city: "Oslo",
		age: 22,
	},
	{
		name: "Matias",
		title: "Developer",
		country: "Denmark",
		city: "Copenhagen",
		age: 28,
	},
];

// Check the speed difference among the following loops: while, for, for of, forEach
// while
let count = 0;
console.time('while');
while (count < users.length) {
	console.log(users[count]);
	count++;
}
console.timeEnd('while'); // 1.014ms

// for
console.time('for');
for (let index = 0; index < users.length; index++) {
	console.log(users[index]);
}
console.timeEnd('for'); // 0.319ms

// forOf
console.time('forOF');
for (const iterator of users) {
	console.log(iterator);
}
console.timeEnd('forOF') // 0.261ms

// forEach
console.time('forEach');
users.forEach(it => console.log(it));
console.timeEnd('forEach'); // 0.144ms