import React from "react";
import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(0);


  function handleAddPerson() {
    setPeople(people + 1);
  }
  function handleSubstractPerson() {
    setPeople(people - 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAddPerson={handleAddPerson}
        onSubstractPerson={handleSubstractPerson}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
