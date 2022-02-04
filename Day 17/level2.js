// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
const student = {
	firstName: 'Binh',
	lastName: 'Truong Vu',
	age: 24,
	skills: ['HTML','CSS3','JavaScript','Csharp','Java'],
	country: 'Vietnam',
	enrolled: true
};

const str = JSON.stringify(student);

localStorage.setItem('student', student);