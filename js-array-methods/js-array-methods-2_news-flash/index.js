import { news } from "./utils/news.js";
import { Card } from "./components/Card/Card.js";
import { checkFilteredNews, checkSortedNews } from "./utils/results.js";

const container = document.querySelector('[data-js="card-container"]');

// Part 1 - start here
const filteredNews = news.filter((card) => {
  if (card.categories.includes("politics")) {
    return true;
  }
});
console.log(filteredNews);

// Part 2 - start here
const sortedNews = filteredNews;

sortedNews.forEach((news) => {
  const cardElement = Card(news);
  container.append(cardElement);
});

filteredNews.sort((a, b) => {
  if (a.body.length > b.body.length) {
    return -1;
  }
  if (a.body.length < b.body.length) {
    return -1;
  }
  {
    return 0;
  }
});

console.log(filteredNews);

// Check your filter and sorting order here:
checkFilteredNews(filteredNews);

checkSortedNews(sortedNews);
