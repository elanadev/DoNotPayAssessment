import React from "react";
import Item from "./Item";

const Column = ({ sectionName, list }) => (
  <>
    <h3>{sectionName}</h3>
    <button>+</button>
    <ul className="cardList">
      {list.map((item) => (
        <Item cardInfo={item} />
      ))}
    </ul>
  </>
);

export default Column;
