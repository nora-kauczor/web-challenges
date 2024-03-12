console.clear();

const form = document.querySelector('[data-js="form"]');

// Log all form data (in object form) into the console in the submit event handler.

// Make sure the form is reset and the First Name input is focused after submission.

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target.elements;
  const allTheData = new FormData(event.target);
  const dataWeWant = Object.fromEntries(allTheData);
  console.log(dataWeWant);
  form.firstName.focus();
  event.target.reset();
});
