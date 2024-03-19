console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
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
    tags: ["js", "next", "advanced"],
  },
];

// const newArray = cards.map((card) => {
//   const lowerCaseAnswers = card.answer.toLowerCase();
//   const questionsAndAnswersTogether = `${card.question} - ${card.answer}`;
//   const questionAndAnswer = `question: '${card.question}, answer: ${card.answer}`;
//   return lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer;
// });

// console.log(newArray);
// export { newArray };

const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});

const questionsAndAnswersTogether = cards.map((card) => {
  return `${card.question} - ${card.answer}`;
});
const questionAndAnswer = cards.map((card) => {
  return `question: '${card.question}, answer: ${card.answer}`;
});

console.log(lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer);

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
