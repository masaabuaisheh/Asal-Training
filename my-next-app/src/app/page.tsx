import React from "react";
import ImageTextBlock from "./ImageTextBlock";
import Image from "./images/unnamed.jpg";

const inputs = {
  input1: { text: "First paragraph text", img: Image.src },
  input2: { text: "Second paragraph text", img: Image.src },
  input3: { text: "Third paragraph text", img: Image.src },
  input4: { text: "Fourth paragraph text", img: Image.src },
};

function App() {
  const inputsArray = Object.values(inputs);

  return (
    <div className="App">
      {inputsArray.map((input, index) => (
        <ImageTextBlock
          key={index}
          text={input.text}
          img={input.img}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}

export default App;

/*
const inputs = [
  {
    text: "This is the first paragraph.",
    img: "https://via.placeholder.com/150",
  },
  {
    text: "This is the second paragraph.",
    img: "https://via.placeholder.com/150",
  },
  {
    text: "This is the third paragraph.",
    img: "https://via.placeholder.com/150",
  },
  {
    text: "This is the fourth paragraph.",
    img: "https://via.placeholder.com/150",
  },
];
*/
