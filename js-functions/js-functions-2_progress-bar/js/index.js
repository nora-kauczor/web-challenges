console.clear();
/*
Progress Bar

Build a progress bar that indicates how much the user has scrolled down the page.
For that:
 - change the starting width of the progressBar in the CSS file to 0%
 - write a function "calculateScrollPercentage" which calculates and returns in percent
   how far the user has scrolled down the page.
   Use the following attributes to achieve this:

----> window.scrollY: the Y position of the window on the total webpage // window.scrollY is a property in JavaScript that returns the number of pixels the document has been scrolled vertically. It represents the vertical scroll position of the document. // For example, if the user has scrolled 100 pixels vertically from the top of the document, window.scrollY will return 100.

----> window.innerHeight: height of the window
area of the browser window where content is displayed, excluding any browser chrome such as toolbars, status bars, etc. // nur der teil, der sichtbar ist ?

----> document.body.clientHeight: height of the webpage // 
document.body.clientHeight provides the height of the entire body content area, including any padding and borders, but excluding margins.
This property is specifically related to the height of the content within the <body> element.
It may not accurately represent the height of the viewport if the body content overflows the viewport.

///////////////////
 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

// progressBar.style.width = 0;

// console.log(window.innerHeight); // 750
// console.log(document.body.clientHeight); // 3160

// ???? wie berechnen
function calculateScrollPercentage() {
  const percentageScrolled =
    (window.scrollY / document.body.clientHeight) * 100 + " %";
  return percentageScrolled;
}

console.log(calculateScrollPercentage());

// was soll der eventhandler machen?
progressBar.addEventListener("scroll", () => {
  progressBar.style.width = calculateScrollPercentage();
});
