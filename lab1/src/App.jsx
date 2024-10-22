import React from "react";
import { data } from "./data/module-data.js";
import PersonProfile from "./components/PersonProfile.js";
import RootLayout from "./layouts/RootLayout.js";

function App() {
  return (
    <RootLayout>
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
    </RootLayout>
  );
}

export default App;
