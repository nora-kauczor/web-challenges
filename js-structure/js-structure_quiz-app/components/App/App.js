import { Header } from "../Header/Header.js";
import { Form, handleFormSubmit } from "../Form/Form.js";
import { CardList } from "../CardList/CardList.js";

function App() {
  const app = document.createElement("main");
  app.classList.add("app");
  app.append(Header(), Form(), CardList());

  return app;
}

export { App };
