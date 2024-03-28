import React from "react";
import { useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setName(event.target.elements.name.value);
    setEmail(event.target.elements.email.value);
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">John doe</span>
      </p>
      <p>
        Email: <span className="output">John@Doe.com</span>
      </p>
    </div>
  );
}
