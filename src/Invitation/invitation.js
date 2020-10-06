import React from "react";
import { useHistory } from "react-router";

export default function Invitation({
  name,
  setName,
}) {
  const history = useHistory();

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("../SchoolList");
  }
  console.log({ name });

  return (
    <div className="invitation layout">
      {/* <img
        className="letter-seal"
        src={require("../Images/letterSeal.png")}
        alt="Hogwarts Letter Seal"
      /> */}
      <form onSubmit={handleSubmit}>
        <label>
          To Whom It May Concern:
          <input
            className="name-form"
            type="text"
            value={name}
            placeholder="Potter"
            onChange={handleChange}
            required
          />
        </label>
        <button
          class="name-button"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
