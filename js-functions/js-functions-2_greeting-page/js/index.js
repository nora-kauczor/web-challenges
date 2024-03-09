console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )



*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let hour = new Date().getHours();
  if (hour > 5 && hour < 13) {
    return "Good Morning";
  } else if (hour > 12 && hour < 19) {
    return "Good Afternoon";
  } else if (hour > 22 && hour < 5) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

/*Was ist ".textContent"?? display wurde doch hier in js deklariert, braucht man den zusatz nach dem pu kt damit es auf html zurückwirkt?*/

display.textContent = getGreeting();

// - Write a function getDayColor that returns a different color depending on the current weekday:
//   - monday: "darkgray"
//   - tuesday - friday: "lightblue"
// //   - saturday - sunday: "hotpink"

// (HINT: you can get the current weekday: new Date().getDay() )
function getDayColor() {
  let weekDay = new Date().getDay();
  if (weekDay === 1) {
    return "darkgray";
  } else if (weekDay === 6 && weekDay === 7) {
    return "hotpink";
  } else {
    return "lightblue";
  }
  // Code here
}
console.log(getDayColor());

document.body.style.backgroundColor = getDayColor();
