import React from "react";
import FlexContainer from "../components/FlexContainer.jsx";

const data = [
  { name: "Ala", id: 1 },
  { name: "Ela", id: 2 },
  { name: "Karol", id: 3 },
  { name: "Ola", id: 4 },
  { name: "Monika", id: 5 },
  { name: "Robert", id: 6 },
];

const Item = ({ name, id }) => (
  <div className="card" style={{ width: "18rem" }} key={id}>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
    </div>
  </div>
);

const Lab3 = () => (
  <div>
    <h1>Laboratorium 3</h1>
    <FlexContainer element={Item} data={data} />
  </div>
);

export default Lab3;
