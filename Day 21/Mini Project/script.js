const li = document.querySelectorAll('li');

li.forEach(it => {
	if (it.className == "done") {
		it.style.backgroundColor = 'green';
	} else if (it.className == "ongoing"){
		it.style.backgroundColor = 'yellow';
	} else {
		it.style.backgroundColor = 'red';
	}
});

let span = document.getElementsByClassName('year');

let colour = [];

for (let index = 0; index < 100; index++) {
	colour.push(Math.round((Math.random() * 255) + 1));
}
setInterval(() => {
	span[0].style.color = `rgb(${colour[Math.round((Math.random() * 100) + 1)]}, ${colour[Math.round((Math.random() * 100) + 1)]}, ${colour[Math.round((Math.random() * 100) + 1)]})`;
}, 1000);
