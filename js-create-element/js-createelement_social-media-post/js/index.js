// This page shows an example of a social media post. Your task is to replicate the social media post with JavaScript. Use document.createElement() to generate all HTML elements separately.

// Don't use .innerHTML to create the HTML in one instance, but use multiple calls of document.createElement() instead.

// The index.html demonstrates the required HTML tags, structure and class names.

// Append the second social media post to the body. Don't forget to add the event listener to the like button. You can use the function handleLikeButtonClick for the event listener.

console.clear();
// // funktion für button kreieren
// function handleLikeButtonClick(event) {
//   const buttonElement = event.target;
//   buttonElement.classList.toggle("post__button--liked");
// }

// button.addEventListener("click", () => {
//   handleLikeButtonClick();
// });

// // headline
// const headline = document.createElement("h1");
// headline.textContent = "Social Media Post";

// // post
// const post = document.createElement("article");
// document.body.append(headline, post);

// // content (in post)
// const postContent = document.createElement("p");
// postContent.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

// // footer (in post)
// const footer = document.createElement("footer");

// // append children of post
// post.append(postContent, footer);
// // username (in footer)

// // button (in footer)
// const likeButton = document.querySelector('[data-js="like-button"]');
// likeButton.addEventListener("click", handleLikeButtonClick);
// // append children of footer
// footer.append(button, username);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// ZWEITER POST

const post2 = document.createElement("article");

post2.classList.add("post");

// struktur
document.body.append(post2);
post2.append(postContent2, footer2);
post2.footer2.append(button2, username2);

// content
const postContent2 = document.createElement("p");
postContent2.classList.add("post__content");
postContent2.textContent =
  "nfijbwofvbwovfbwjhftioewhfoknsvoknweiohfewibnfojweb, ejbhfijeb ... !!!!";

// FOOTER
const footer2 = document.createElement("footer");
footer2.classList.add("post__footer");

// username (im footer)
const username2 = document.createElement("span");
username2.textContent = "@marianne";
username2.classList.add("post_username");
// button (im footer)
const button2 = document.createElement("button");
button2.textContent = "♥ Like";
button2.classList.add("post_button");
button2.setAttribute("type", "button");
button2.setAttribute("data-js", "like-button");
