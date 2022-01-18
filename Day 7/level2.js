const date = new Date();
const demoArr = ["a", "b", "c"];
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
const printArray = (arr) => {
	for (const iterator of arr) {
		console.log(iterator);
	}
};

printArray([5, 8, 7, 8]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime() {
	const d = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	const month =
		date.getMonth() + 1 < 10
			? "0" + (date.getMonth() + 1)
			: date.getMonth() + 1;
	const y = date.getFullYear();
	const h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	const min =
		date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

	return `${d}/${month}/${y} ${h}:${min}`;
}

console.log(showDateTime());

// Declare a function name swapValues. This function swaps value of x to y.
const swapValues = (x, y) => {
	let temp = x;
	x = y;
	y = temp;
	console.log(`${x}, ${y}`);
};

swapValues(1, 3);

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const reverseArray = (arr) => {
	let reversed = [];
	for (let index = arr.length - 1; index >= 0; index--) {
		reversed.push(arr[index]);
	}
	return reversed;
};

console.log(reverseArray([1, 2, 3, 4, 5]));

// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray
const capitalizeArray = (arr) => {
	let cap = [];
	for (const iterator of arr) {
		cap.push(iterator.toUpperCase());
	}
	return cap;
};

console.log(capitalizeArray(["binh", "thao", "yen"]));

// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem = (whatever) => {
	demoArr.push(whatever);
	return demoArr;
};

console.log(addItem("e"));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem = (ind) => {
	demoArr.splice(ind, 1);
	return demoArr;
};

console.log(removeItem(1));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (num) => {
	let sum = 0;
	for (let index = 1; index <= num; index++) {
		sum += parseInt(index);
	}
	return sum;
};

console.log(sumOfNumbers(150));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdds = (num) => {
	let odds = 0;
	for (let index = 1; index <= num; index++) {
		if (index % 2 == 0) odds += parseInt(index);
	}
	return odds;
};

console.log(sumOfOdds(150));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (num) => {
	let even = 0;
	for (let index = 1; index <= num; index++) {
		if (index % 2 != 0) even += parseInt(index);
	}
	return even;
};

console.log(sumOfEven(150));

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
const evensAndOdds = (num) => {
	let odds = 0,
		even = 0;
	for (let index = 0; index <= num; index++) {
		if (index % 2 == 0) {
			even++;
		} else {
			odds++;
		}
	}
	console.log(`Number of odds: ${odds} \n Number of even: ${even}`);
};

evensAndOdds(100);

// Write a function which takes any number of arguments and return the sum of the arguments
const sum = (...arg) => {
	let total = 0;
	for (const iterator of arg) {
		total += parseInt(iterator);
	}
	return total;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Write a function which generates a randomUserIp.
const randomUserIp = () => {
	// IP address format: xxx.xxx.xxx.xxx where xxx <= 255 
	let ip = "";
	for (let index = 0; index < 4; index++) {
		if (index < 3) {
			ip += Math.floor(Math.random() * 256) + ".";
		} else {
			ip += Math.floor(Math.random() * 256);
		}
	}

	return ip;
};

console.log(randomUserIp());

// Write a function which generates a randomMacAddress
const randomMacAddress = () => {
	// MAC address format: aa-bb-cc-dd-ee-ff
	let mac = '';
	let char = '0123456789ABCDEF'
	for (let index = 0; index < 12; index++) {
		mac += char.charAt(Math.floor(Math.random() * (char.length)));
	}
	let a = mac.match(/.{1,2}/g);
	mac = a[0] + '-';
	for (let index = 1; index < a.length ; index++) {
			if (index < 5) {
				mac += a[index] + '-';
			} else {
				mac += a[index];
			}
		};

	return mac;
};

console.log(randomMacAddress());

//Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
const randomHexaNumberGenerator = () => {
	let hex = '#';

	for (let index = 0; index < 6; index++) {
		hex += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}

	return hex;
}

console.log(randomHexaNumberGenerator());

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
const userIdGenerator = () => {
	let id ='';

	for (let index = 0; index < 7; index++) {
		id += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}

	return id;
}

console.log(userIdGenerator());

