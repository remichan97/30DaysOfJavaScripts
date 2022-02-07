// Create a closure which has three inner functions
function funcOne(){
	let count = 0;
	function plusOne() {
		count++;
		return count;
	}
	function minusOne() {
		count--;
		return count;
	}
	function multiply(num) {
		return count * num;
	}
	return {
		plusOne:plusOne(),
		minusOne:minusOne(),
		multiply:multiply(8),
	}
}

const func = funcOne();
console.log(func);