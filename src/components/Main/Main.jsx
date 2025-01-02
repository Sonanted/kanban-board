import React from "react";

import Column from "../Column/Column";

import { cardsData } from "../../scripts/cards-data";

import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <h1 className="main__heading">Sonanted-board</h1>
      <ul className="columns">
        <Column
          className="to-do"
          title="To Do"
          data={cardsData.filter((card) => card.status === "to-do")}
        />
        <Column
          className="in-progress"
          title="In Progress"
          data={cardsData.filter((card) => card.status === "in-progress")}
        />
        <Column
          className="testing"
          title="Testing"
          data={cardsData.filter((card) => card.status === "testing")}
        />
        <Column
          className="done"
          title="Done"
          data={cardsData.filter((card) => card.status === "done")}
        />
      </ul>
    </main>
  );
};

export default Main;
