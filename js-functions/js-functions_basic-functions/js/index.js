console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/
const bookTitle = "The Lord of the Javascript";
const author = "Mario";
let rating = 4.2;
let numberOfSales = 120;

function logBookData() {
  console.log(`
Title: ${bookTitle}
Author: ${author}
Rating: ${rating}
Sales: ${numberOfSales}
  `);
}
logBookData();

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

rating++;
numberOfSales++;
logBookData();

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

numberOfSales++;
logBookData();

numberOfSales++;
logBookData();

// --v-- write your code here --v--

// --^-- write your code here --^--
