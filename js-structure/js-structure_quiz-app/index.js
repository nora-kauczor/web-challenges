import { cards, Card } from "./components/Card/Card.js";
import { Header } from "./components/Header/Header.js";
import { Form, handleFormSubmit } from "./components/Form/Form.js";
import { Bookmark } from "./components/Bookmark/Bookmark.js";
import { CardList } from "./components/CardList/CardList.js";
import { App } from "./components/App/App.js";

// Store the cards in a global state  ?

// 1. cards (+)

// 2. header (+)

// 3. form (+)

// 4. bookmark (+)

// 5. cards2 (+)

// 6. cardlist (+)

// 7. app (+)

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();

// Eventually, the ./index.js file should only contain imports, function calls and the main render() function. -> which function calls??
