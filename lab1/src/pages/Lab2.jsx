import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../data/module-data";
import PersonProfile from "../components/PersonProfile";

const Lab2 = () => {
  const { id } = useParams();
  const person = data.find((p) => p.id === parseInt(id));

  if (!id) {
    return <p>No ID provided</p>;
  }

  if (!person) {
    return <p>Person not found</p>;
  }

  return (
    <div>
      <PersonProfile
        id={person.id}
        name={person.name}
        birth={person.birth}
        eyes={person.eyes}
      />
    </div>
  );
};

export default Lab2;
