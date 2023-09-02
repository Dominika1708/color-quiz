import { useState } from "react";
import './Quiz.css'

const findCenterColor = (a, b) => {

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
