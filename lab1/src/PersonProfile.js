import React from "react";

const PersonProfile = ({ id, name, birth, eyes }) => {
  return (
    <div>
      <h2>Person Profile</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Birth: {birth}</p>
      <p>Eye Color: {eyes}</p>
    </div>
  );
};

export default PersonProfile;
