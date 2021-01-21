import React, { useState } from "react";
import Column from "./Column";

const Kanban = () => {
  const [lists, setLists] = useState({
    pending: [{ title: "Item A" }, { title: "Item B" }],
    inprogress: [{ title: "Item C" }],
    completed: [{ title: "Item D" }, { title: "Item E" }]
  });

  return (
    <section id="board">
      <div id="pending">
        <Column sectionName="Pending" list={lists.pending} />
      </div>
      <div id="inprogress">
        <Column sectionName="In Progress" list={lists.inprogress} />
      </div>
      <div id="completed">
        <Column sectionName="Completed" list={lists.completed} />
      </div>
    </section>
  );
};

export default Kanban;
