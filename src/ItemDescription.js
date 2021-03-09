import React from "react";

function ItemDescription({ name, description }) {
  return (
    <div className="itemDescription">
      <p>{name}</p>
      <p>
        <i>{description}</i>
      </p>
    </div>
  );
}

export default ItemDescription;
