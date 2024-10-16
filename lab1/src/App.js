import React from "react";
import { data } from "/Users/justynamalinowska/Documents/ReactLab/lab1/src/module-data"; // Importuj wygenerowaną tablicę
import PersonProfile from "/Users/justynamalinowska/Documents/ReactLab/lab1/src/PersonProfile.js"; // Importuj komponent

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
