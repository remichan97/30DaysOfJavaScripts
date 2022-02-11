// Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
document.querySelector("p");

// Get each of the paragraph using document.querySelector('#id') and by their id
document.querySelector("#first-title");
document.querySelector("#second-title");
document.querySelector("#third-title");

// Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const a = document.querySelectorAll("p");

// Loop through the nodeList and get the text content of each paragraph
a.forEach((it) => console.log(it));

// Set a text content to paragraph the fourth paragraph,Fourth Paragraph
const a = document.querySelectorAll("p");
a[3].textContent = "Fourth Title";

// Set id and class attribute for all the paragraphs using different attribute setting methods
const a = document.querySelectorAll("p");
a[3].setAttribute("class", "title");
a[3].setAttribute("id", "fourth-title");
