import React from "react";
import { useHistory } from "react-router-dom";

export default function SchoolList({ name }) {
  const history = useHistory();

  return (
    <div className="schoolList layout">
      <header className="school-list-header">
        <img
          src={require("../Images/hogwartsEmblem.png")}
          alt="hogwarts emblem"
        />
      </header>
      <h1>
        Hogwarts School of Witchcraft and Wizardry
      </h1>
      <h2>Dear Mr./Miss {name},</h2>
      <h3>
        We are pleased to inform you that you have
        been accepted at Hogwarts School of
        Witchcraft and Wizardry.
      </h3>
      <h3>
        Please find enclosed a list of all
        necessary books and equipment.
      </h3>
      <ol>
        <li>1 WAND</li>
        <li>
          1 CAULDRON (PEWTER, STANDARD SIZE 2)
        </li>
        <li>1 SET OF GLASS OR CRYSTAL PHIALS</li>
        <li>1 TELESCOPE</li>
        <li>1 SET OF BRASS SCALES</li>
        <li>
          STUDENTS MAY ALSO BRING AN OWL, A CAT,
          OR A TOAD
        </li>
      </ol>
      <button
        onClick={() => history.push("../Shop")}
      >
        {" "}
        Shop for Items{" "}
      </button>
    </div>
  );
}
