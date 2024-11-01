import React, { useState } from "react";
import RatingBar from "./RatingBar";

const Item = ({ name, id, dispatch }) => {
  const [rating, setRating] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  const handleRate = () => {
    const newRating = rating === 10 ? 0 : rating + 1;
    setRating(newRating);
    dispatch({ type: "rate", id, rating: newRating });
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch({ type: "edit", id, name: newName });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          <h5 className="card-title">{name}</h5>
        )}
        <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        <button onClick={() => dispatch({ type: "delete", id })}>Delete</button>
        <button onClick={handleRate}>Rate</button>
        <RatingBar rate={rating} />
      </div>
    </div>
  );
};

export default Item;
