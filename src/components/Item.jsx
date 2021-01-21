import React from "react";

const Item = ({ cardInfo }) => (
  <li>
    <div>
      <h4>{cardInfo.title}</h4>
      <br />
      {cardInfo.body}
    </div>
  </li>
);

export default Item;
