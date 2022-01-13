// Write a program which tells the number of days in a month.
let month = prompt("what month it is?");

switch (month) {
	case 'February':
		var year = prompt('You typed February! Please enter a year:');
		while (isNaN(year)) {
			year = prompt('Input is Not a Number! Please enter a year:');
		}
		console.log(((parseInt(year) % 4 == 0 && parseInt(year) % 100 != 0) || parseInt(year) % 400 == 0 )? `29 days` : `28 days`);
		break;
	case 'April': case 'June': case 'September': case 'November':
		console.log('30 days');
		break;
	default:
		console.log('31 days');
		break;
}