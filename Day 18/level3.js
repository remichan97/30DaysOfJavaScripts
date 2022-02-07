const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// Read the countries api and count total number of languages in the world used as officials.
const lang = new Set();

fetch(countriesAPI)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		data.forEach((it) => {
			it.languages.forEach((it) => lang.add(it.name));
		});
		console.log(lang);
		console.log(lang.size);
	})
	.catch((err) => console.log(err));