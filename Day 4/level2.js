/*
Write a code which can give grades to students according to theirs scores:
	80-100, A
	70-89, B
	60-69, C
	50-59, D
	0-49, F
*/
let scores = prompt("Enter your score:");
while (isNaN(scores)) {
	scores = prompt("Input is not a Number! Enter your score:");
}

switch (scores) {
	case scores >= 80 && scores <= 100 :
		console.log("Your rating: A");
		break;
	case scores >= 70 && scores <= 89 :
		console.log("Your rating: B");
		break;
	case scores >= 60 && scores <= 69 :
		console.log("Your rating: C");
		break;
	case scores >= 50 && scores <= 59 :
		console.log("Your rating: D");
		break;
	default:
		console.log("Your rating: F");
		break;
}

/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
	September, October or November, the season is Autumn.
	December, January or February, the season is Winter.
	March, April or May, the season is Spring
	June, July or August, the season is Summer
*/
let month = prompt("Enter a month:");

switch (month) {
	case 'September': case 'October': case 'November': 
		console.log('Autumn');
		break;
	case 'December': case 'January': case 'February': 
		console.log('Winter');
		break;
	case 'March': case 'April': case 'May': 
		console.log('Spring');
		break;

	default:
		console.log('Summer');
		break;
}

// Check if a day is weekend day or a working day. Your script will take day as an input.
let day = prompt("What day is it:");

switch (day) {
	case 'Saturday': case 'Sunday':
		console.log('Weekend');
		break;

	default:
		console.log('Working day');
		break;
}