import React from "react";
import { data } from "./data/module-data";
import PersonProfile from "./components/PersonProfile.js";

function App() {
  return (
    <div>
      <h1>People List</h1>
      {data.map((person) => (
        <PersonProfile
          key={person.id}
          id={person.id}
          name={person.name}
          birth={person.birth}
          eyes={person.eyes}
        />
      ))}
    </div>
  );
}

export default App;
