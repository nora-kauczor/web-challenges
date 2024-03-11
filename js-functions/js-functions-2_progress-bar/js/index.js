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
area of the browser window where content is displayed, excluding any browser chrome such as toolbars, status bars, etc. // nur der teil, der sichtbar ist im browser // wofür brauchen wir das, wenn scrollY sich auf den ganzen body bezieht?

----> document.body.clientHeight: height of the webpage // 
document.body.clientHeight provides the height of the entire body content area, including any padding and borders, but excluding margins - auch das was gerade im browser nicht sichtbar ist (weil man dazu runterscrollen müsste)

///////////////////
 - change the width of the progressBar whenever the user scrolls down or up. Use your
   function to calculate the current scroll percentage.

 (HINT: you can add a 'scroll' event listener to the document )
 (HINT: you can change the width of an element like this: element.style.width = '10px')
*/

const progressBar = document.querySelector('[data-js="progress-bar"]');

// progressBar.style.width = str(window.height / document.body.clientHeight) + `%`;

function calculateScrollPercentage() {
  const percentageScrolled =
    str(
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
    ) + ` %`;
  return percentageScrolled;
}

window.addEventListener("scroll", () => {
  console.log("42");
});

// window.addEventListener("scroll", () => {
//   const newWidth = calculateScrollPercentage();
//   progressBar.style.width = str(newWidth);
// });
