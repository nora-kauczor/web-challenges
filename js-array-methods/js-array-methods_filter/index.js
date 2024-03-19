console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: true, // neu geschrieben
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id === "2";
});

console.log(onlyCardWithIdTwo);

/////// 2
const allCardsWith3Tags = cards.filter((card) => {
  if (card.tags.length === 3) {
    return true;
  }
});

console.log(allCardsWith3Tags);

////// 3
const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked != true;
});

console.log(allCardsThatAreNotBookmarked);

// If you want to ensure that both conditions must be fulfilled (similar to a logical AND operation), you can simply use the && operator in JavaScript.
// If you want to implement a logic where only one condition has to be fulfilled (an OR operation), you can simply use the || (OR) operator.

////// 4 ---- ?
const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  if (
    card.isBookmarked &&
    (card.tags.includes("js") || card.tags.includes("html"))
  )
    return true;
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
