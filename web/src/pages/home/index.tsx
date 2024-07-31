import React from "react";
import ImageTextBlock from "./ImageTextBlock";
import logo from "../../assets/images/unnamed.jpg";
import Image from 'next/image'

const inputs = {
  input1: { text: "First paragraph text", img: logo.src },
  input2: { text: "Second paragraph text", img: logo.src },
  input3: { text: "Third paragraph text", img: logo.src },
  input4: { text: "Fourth paragraph text", img: logo.src },
};

function App() {
  const inputsArray = Object.values(inputs);

  return (
    <div className="App">
      {inputsArray.map((input) => (
        <div>
         <Image
         src={input.img}
         alt="Unnamed Picture"
         width={800}
         height={500}
       />
         <p>{input.text}</p>
         </div>
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
