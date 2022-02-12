// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
const a = document.querySelectorAll('p');

a.forEach(it => {
	it.style.color = 'blue';
	it.style.border = 'solid 1px black';
	it.style.fontSize = '15px';
	it.style.fontFamily = 'Cascadia Code';
});

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
for (let index = 0; index < a.length; index++) {
	if (index == 0 || index == 2) {
		a[index].style.color = 'green';
	} else {
		a[index].style.color = 'red';
	}
}

// Set text content, id and class to each paragraph
a[a.length - 1].textContent = 'Fourth Paragraph';
a[a.length - 1].setAttribute('id', 'fourth-paragraph'); 
a[a.length - 1].setAttribute('class', 'title'); 