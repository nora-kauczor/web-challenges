console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.error("Access denied!");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("even number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

// if (numberOfHotdogs > 10 ** 6 - 1) {
//   console.log(0.1 * numberOfHotdogs + "€");
// } else {
//   if (numberOfHotdogs > 99) {
//     console.log(numberOfHotdogs + "€");
//   } else {
//     if (numberOfHotdogs > 4) {
//       console.log(1.5 * numberOfHotdogs + "€");
//     } else {
//       console.log(2 * numberOfHotdogs + "€");
//     }
//   }
// }

console.log(
    (numberOfHotdogs >= 10 ** 6) ? 0.1 : 
  ((numberOfHotdogs >= 100) ? 1 : 
  ((numberOfHotdogs >= 5) ? 1.5 : 2
    )) * numberOfHotdogs
  + " €");

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "still need to learn.." : "Party time!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting =
  "Hello " + (userName === coachName "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);
