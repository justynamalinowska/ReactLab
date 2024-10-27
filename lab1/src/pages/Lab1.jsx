import React from "react";
import { data } from "../data/module-data";
import PersonProfile from "../components/PersonProfile";

const Lab1 = () => {
  return (
    <div>
      <h1>Lab 1 - People List</h1>
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
};

export default Lab1;
