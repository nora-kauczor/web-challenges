import { Header } from "./components/Header/Header.js";
import { Bookmark } from "./components/Bookmark/Bookmark.js";
import { Card } from "./components/Card/Card.js";

// Store the cards in a global state ??

const cards = [
  {
    question:
      "In the Kingdom Hearts series who provides the english voice for Master Eraqus?",
    answer: "Mark Hamill",
    tags: ["kingdomheart", "mastereraqus", "english voices"],
    isBookmarked: false,
  },
  {
    question:
      "Daniel Radcliffe became a global star in the film industry due to his performance in which film franchise?",
    answer: "Harry Potter",
    tags: ["hewhomustnotbenamed", "danielradcliffe", "abracadabra"],
    isBookmarked: false,
  },
  {
    question:
      'In the game series "The Legend of Zelda" what is the name of the main character?',
    answer: "Link",
    tags: ["linktothepast", "linkbetweenworlds", "linkbetweenages"],
    isBookmarked: false,
  },
];

// header

function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const newCard = {
    question: data.question,
    answer: data.answer,
    tags: data.tags.split(","),
    isBookmarked: false,
  };

  cards.unshift(newCard);

  // To prevent the need to rerender, we add the new card to the DOM directly
  const cardList = document.querySelector(".card-list");
  const newCardElement = Card(newCard);
  cardList.prepend(newCardElement);

  event.target.reset();
  event.target.elements.question.focus();
}

function Form() {
  const form = document.createElement("form");
  form.classList.add("form");
  form.innerHTML = /* html */ `
		<label for="question">Your question:</label>
		<textarea
			id="question"
			rows="7"
			name="question"
			maxlength="150"
			data-js="input-question"
		></textarea>
		<span class="form__character-count">
			<span data-js="amount-left-question"></span> characters left
		</span>
		<label for="answer">Your answer:</label>
		<textarea
			id="answer"
			rows="7"
			name="answer"
			maxlength="150"
			data-js="input-answer"
		></textarea>
		<span class="form__character-count">
			<span data-js="amount-left-answer"></span> characters left
		</span>
		<label for="tags">Tags:</label>
		<input id="tags" type="text" name="tags" />
		<button class="form__submit-button" type="submit">Submit</button>
	`;

  const formFields = form.querySelectorAll('[data-js*="input"]');
  const counterOutputs = form.querySelectorAll("[data-js*=amount-left]");

  formFields.forEach((formField, index) => {
    counterOutputs.forEach((output) => {
      output.innerText = formField.maxLength;
    });
    formField.addEventListener("input", () => {
      const currentAmountLeft = formField.maxLength - formField.value.length;
      counterOutputs[index].innerText = currentAmountLeft;
    });
  });

  form.addEventListener("submit", handleFormSubmit);

  return form;
}

// bookmark

// cards 2

function handleBookmarkButtonClick(event) {
  cards.find((card) => card.question === props.question).isBookmarked =
    !props.isBookmarked;
  // To prevent the need to rerender, we can just toggle the class here
  event.currentTarget.classList.toggle("bookmark--active");
}

const bookmarkButton = Bookmark({
  active: props.isBookmarked,
  onClick: handleBookmarkButtonClick,
});
bookmarkButtonWrapper.append(bookmarkButton);

///////////////////////////

function handleAnswerButtonClick() {
  answer.classList.toggle("card__answer--active");
  //   }

  answerButton.addEventListener("click", handleAnswerButtonClick);

  return card;
}

function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
