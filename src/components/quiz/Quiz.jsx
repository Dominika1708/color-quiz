import { useState } from "react";
import './Quiz.css'

const findCenterColor = (a, b) => {
  // divide the color string into 3 parts of every color than
  // "switch"(?) to change the letters in the color string to numbers
  // find the average of the pairs of two numbers
  // switch back to hex and connect the 3 parts

  //make it so more than 2 colors can be entered?
}

const Quiz = () => {
  const [colorOne, setColorOne] = useState("#ffffff");
  const [colorTwo, setColorTwo] = useState("#ffffff");

  // const combinedColors = findCenterColor(colorOne, colorTwo)

  return (
    <div className="quiz">
      <button
        className="quiz-button"
        style={{ backgroundColor: colorOne }}
        onClick={() =>
          setColorOne("#" + Math.floor(Math.random() * 16777215).toString(16))
        }
      >
        {colorOne}
      </button>
      <button
        className="quiz-button"
        style={{ backgroundColor: colorTwo }}
        onClick={() =>
          setColorTwo("#" + Math.floor(Math.random() * 16777215).toString(16))
        }
      >
        {colorTwo}
      </button>
      {/* <p style={{ backgroundColor: combinedColors }}>{combinedColors}</p> */}
    </div>
  );
};

export default Quiz;
