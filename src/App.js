import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [numberOfButtons, setNumberOfButtons] = useState(1);
  const [numberOfLastButton, setNumberOfLastButton] = useState(0);

  let buttonArray = [];
  if (numberOfButtons > 0) {
    for (let i = 0; i < numberOfButtons; i++) {
      buttonArray.push(
        <>
          <button onClick={() => setNumberOfLastButton(i)}>{i}</button>
          <br />
        </>
      );
    }
  }

  const helperFunction = (action) => {
    if (action === "removeButton") {
      if (numberOfButtons > 0) setNumberOfButtons(numberOfButtons - 1);
    }
    if (action === "createButton") {
      setNumberOfButtons(numberOfButtons + 1);
    }
  };

  return (
    <div className="App">
      <h1>CodeSandbox.io... Simply fantastic!</h1>
      <h2>
        <span role="img" aria-label="smile face">
          (😂{" "}
        </span>
        even better than CodePen.io
        <span role="img" aria-label="shhh face">
          {" "}
          🤫)
        </span>
      </h2>
      <h3>
        Here (using React Hooks) we're programmatically generating an
        arbitrarily long list of buttons and accessing their state!
      </h3>
      <div>{buttonArray}</div>
      <div>
        <button onClick={() => helperFunction("removeButton")}>-</button>
        <button onClick={() => helperFunction("createButton")}>+</button>
      </div>
      <div>
        <br />
        {numberOfLastButton} was the number of the last button you clicked!
      </div>
    </div>
  );
}
