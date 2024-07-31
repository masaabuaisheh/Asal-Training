import React from "react";
import logo from "../../assets/images/unnamed.jpg";
import Image from 'next/image';

const inputs = {
  input1: { text: "First paragraph text", img: logo },
  input2: { text: "Second paragraph text", img: logo },
  input3: { text: "Third paragraph text", img: logo },
  input4: { text: "Fourth paragraph text", img: logo },
};

function App() {
  const inputsArray = Object.values(inputs);

  return (
    <div className="App">
      {inputsArray.map((input, index) => (
        <div className="opposite-direc"
          key={index}
        >
          <Image
            src={input.img}
            alt="Unnamed Picture"
            width={350}
            height={250}
          />
          <p>{input.text}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
