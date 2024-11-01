import React, { useReducer } from "react";
import AppReducer from "../data/AppReducer";
import Item from "./ItemComponent";
import "../styles/FlexContainer.css";

function FlexContainer({ data }) {
  const [items, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="flex-container">
      {items.map((item) => (
        <Item key={item.id} {...item} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default FlexContainer;
