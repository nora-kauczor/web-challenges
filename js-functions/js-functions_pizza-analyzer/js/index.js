console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');

const pizza1 = document.querySelector('[data-js="pizza-1"]');
/////////
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
///////////
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

//METHODS
//pizzaInput1: Stelle, wo die methode ausgelöst werden soll (eingabefeld der ersten pizza)
//diameter1: wert, der dort eingegeben wurde. woher bekommt man den? ist das auch pizzaInput1? -> mit .value
// // Inside both event listeners, save the current values of both pizza inputs in two variables pizzaSize1 and pizzaSize2
// 💡 You can use the queried elements and get their value like this: pizzaInput.value
// pizzaInput1.addEventListener("input", () => {
//   let pizzaSize1 = pizzaInput1.value;
//   let pizzaSize2 = pizzaInput2.value;
//   output.textContent = calculatePizzaGain(pizzaSize1, pizzaSize2);
// });

pizzaInput1.addEventListener("input", () => {
  output.textContent = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

pizzaInput2.addEventListener("input", () => {
  output.textContent = calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza2, pizzaInput2.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = Math.PI * (diameter1 / 2) ** 2;
  const area2 = Math.PI * (diameter2 / 2) ** 2;
  let pizzaGain = Math.round(((area2 - area1) / area1) * 100);
  return pizzaGain;
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = (newSize / 24) * 100 + "px";
}

// Call this function in both event listeners and pass in the correct pizza element and the correct pizza size.

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size2 > size1) {
    document.body.style.backgroundColor = "var(--green)";
  } else {
    document.body.style.backgroundColor = "var(--red)";
  }
}
