// This exercise includes an example of a product teaser for an online shop. Please append a second product teaser to the page with JavaScript based on the data given in the index.js file.

// Use .innerHTML to generate the HTML elements for the teaser. Use string interpolation to include the given data into the HTML.

// Add an event listener to the "buy" button of the second product teaser. When clicking the button, the product's name and price should be logged to the console.
// You only have to touch the ./js/index.js file.

console.clear();

const product2 = document.createElement("article");
product2.classList.add("product");
document.body.append(product2);

// PRODUCT BODY (child of product)
const productBody2 = document.createElement("div");
productBody2.classList.add("product__body");

// TEXT CONTAINER (child of product body)
const productTextContainer2 = document.createElement("div");
productTextContainer2.classList.add("product__text-container");
const productName2 = document.createElement("h2");
productName2.classList.add("product__name");
productName2 = "Queen angelfish";
const productCategories2 = document.createElement("ul");
productCategories2.classList.add("product__categories");

// CATEGORIES (children of "product categories")
let category1 = document.createElement("li");
let category2 = document.createElement("li");
let category3 = document.createElement("li");
function addCategoryClass(categoryElement) {
  categoryElement.classList.add("product__category");
}
addCategoryClass(category1);
addCategoryClass(category2);
addCategoryClass(category3);
category1 = "Freshwater";
category2 = "Large aquarium";
category3 = "Plankton Diet";
productCategories2.append(category1, category2, category3);

// description (insode text container)
let description = document.createElement("p");
description.classList.add("product__description");
description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";

productBody2.append(productName2, productCategories2, description);

// IMAGE CONTAINER (child of product body)
let productImageContainer2 = document.createElement("div");
productImageContainer2.classList.add("product__image-container");
let productImage2 = document.createElement("img");
productImage2.classList.add("product__image");
productImage2.setAttribute(
  "src",
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640"
);
productBody2.classList.add("product__image");

// FOOTER (child of product)
let productFooter2 = document.createElement("footer");
productFooter2.classList.add("product__footer");
let price = document.createElement("span");
price.classList.add("product__price");
price = "149,99 €";
const button = document.createElement("button");
button.classList.add("product__buy-button");
button.setAttribute("type", "button");

product2.append(productBody2, productFooter2);
