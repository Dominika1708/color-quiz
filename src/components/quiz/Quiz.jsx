import { useState } from "react";
import "./Quiz.css";

const colorToNumbers = (color) => {
  const colorRed = color.slice(1, 3);
  const colorGreen = color.slice(3, 5);
  const colorBlue = color.slice(5, 7);
  return [
    parseInt(colorRed, 16),
    parseInt(colorGreen, 16),
    parseInt(colorBlue, 16),
  ];
};

const findCenterColor = (a, b) => {
  const aNumbers = colorToNumbers(a);
  const bNumbers = colorToNumbers(b);

  const newColor =
    "#" +
    parseInt((aNumbers[0] + bNumbers[0]) / 2).toString(16) +
    parseInt((aNumbers[1] + bNumbers[1]) / 2).toString(16) +
    parseInt((aNumbers[2] + bNumbers[2]) / 2).toString(16);
  return newColor;

  //make it so more than 2 colors can be entered?
};

const Quiz = () => {
  const [colorOne, setColorOne] = useState("#ffffff");
  const [colorTwo, setColorTwo] = useState("#ffffff");

  const combinedColors = findCenterColor(colorOne, colorTwo);

  return (
    <div className="quiz">
      <div>
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
      </div>
      <p className="quiz-color" style={{ backgroundColor: combinedColors }}>
        {combinedColors}
      </p>
    </div>
  );
};

export default Quiz;
