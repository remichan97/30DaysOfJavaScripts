/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
	YYYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const date = new Date();

const y = date.getFullYear();

let mdhmin = [
	date.getMonth() + 1,
	date.getDate(),
	date.getHours(),
	date.getMinutes()
];

for (let index = 0; index < mdhmin.length; index++) {
	if (mdhmin[index] < 10) {
		mdhmin[index] = '0' + mdhmin[index];
	}
}

console.log(`${y}-${mdhmin[0]}-${mdhmin[1]} ${mdhmin[2]}:${mdhmin[3]}`);