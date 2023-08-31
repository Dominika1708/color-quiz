import { useState } from "react";

const Quiz = () => {
  const [colorOne, setColorOne] = useState("#ffffff");
  const [colorTwo, setColorTwo] = useState("#ffffff");

  return (
    <>
      <div>
        <button
          style={{ backgroundColor: colorOne }}
          onClick={() =>
            setColorOne("#" + Math.floor(Math.random() * 16777215).toString(16))
          }
        >
          {colorOne}
        </button>
        <button
          style={{ backgroundColor: colorTwo }}
          onClick={() =>
            setColorTwo("#" + Math.floor(Math.random() * 16777215).toString(16))
          }
        >
          {colorTwo}
        </button>
      </div>
    </>
  );
};

export default Quiz;
