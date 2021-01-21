import React, { useState } from "react";
import Column from "./Column";

const Kanban = () => {
  const [lists, setLists] = useState({
    pending: [
      { title: "Item A", body: "Some content" },
      { title: "Item B", body: "Some stuff" }
    ],
    inprogress: [{ title: "Item C", body: "Something or other" }],
    completed: [
      { title: "Item D", body: "Essential details" },
      { title: "Item E", body: "Info you need to know" }
    ]
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
