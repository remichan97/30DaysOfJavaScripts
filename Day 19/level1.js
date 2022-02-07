// Create a closure which has one inner function
function funcA(){
	let count = 0;
	function plusOne() {
		count++;
		return count;
	}
	return plusOne();
}

const test = funcA();
console.log(test);