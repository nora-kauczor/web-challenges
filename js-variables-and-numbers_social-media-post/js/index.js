console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

const title = document.querySelector("h1");
const text = document.querySelector("p");
let numberOfLikes = null;
const userName = "Markus83";
const isReported = true;

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

console.log(title, text, numberOfLikes, userName, isReported);
numberOfLikes++;
console.log(numberOfLikes);

// --v-- write your code here --v--

// --^-- write your code here --^--
