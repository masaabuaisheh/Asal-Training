import React, { useEffect, useState } from "react";
import Link from "next/link";

const ColorGuessingGame = () => {
    const [boxColor, setBoxColor] = useState("#000000");
    const [buttonColor, setButtonColor] = useState(["#000000", "#000000", "#000000"]);
    const [message, setMessage] = useState("");
    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [wrongGuesses, setWrongGuesses] = useState(0);
   const [rounds, setRounds] = useState(0);
//    const roundsRef = useRef<number>(0);
    const [gameOver, setGameOver] = useState(false);
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const [feedBackColor,setFeedBackColor] = useState('');

    const randomColor = (length: any) => {
        return Math.floor(Math.random() * length);
    };

    const generateRandomHexColor = () => {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColor(hex.length)];
        }
        return hexColor;
    };

    const startGame = () => {
        const correctColor = generateRandomHexColor();
        const wrongColor1 = generateRandomHexColor();
        const wrongColor2 = generateRandomHexColor();

        const Colors = [correctColor, wrongColor1, wrongColor2].sort(() => Math.random() - 0.5);

        setBoxColor(correctColor);
        setButtonColor(Colors);
        setMessage("");
    };

    const handleGuess = (guessColor: string, index: number) => {
        setRounds((prevRounds) => prevRounds + 1);
        //roundsRef.current += 1;
        //console.log("Current round:", rounds);

        setSelectedButton(index);

        if (guessColor === boxColor) {
            setCorrectGuesses((prevGuesses) => prevGuesses + 1);
            setFeedBackColor('green');

        } else {
            setWrongGuesses((prevGuesses) => prevGuesses + 1);
            setFeedBackColor('#b30000');
        }

        const timeoutId = setTimeout(() => {
            setFeedBackColor('');
            setSelectedButton(null);
        }, 500);

        if (rounds + 1 < 5) {
        // if (roundsRef.current < 5) {
            startGame();
        } else {
            setGameOver(true);
        }
        
        return () => clearTimeout(timeoutId); 
    };
    

    const resetGame = () => {
        setCorrectGuesses(0);
        setWrongGuesses(0);
        setRounds(0);
        // roundsRef.current = 0;
        setMessage('');
        setGameOver(false);
        startGame();
    };

    useEffect(() => {
        if (rounds === 5) {
            // if (roundsRef.current === 5) {
            if (correctGuesses === 5) {
                setMessage('All guesses are correct!');
            } else {
                setMessage(`Try guessing again. Wrong guesses: ${wrongGuesses} Correct guesses: ${correctGuesses}`);
            }
        }
    }, [rounds, correctGuesses, wrongGuesses]);

    useEffect(() => {
        startGame();
    }, []);

    return (
        <div className="main-class">
            <div className="title">Color Guessing Game</div>
            <Link className='back-home' href="/">Back</Link>
            <div className="box" style={{ backgroundColor: boxColor }}></div>
            <div className="container">
                <div className="button-container">
                    {buttonColor.map((color, index) => (
                        <button
                            key={index}
                            className={`btn${index + 1}`}
                            onClick={() => handleGuess(color, index)}
                            style={{backgroundColor: selectedButton === index ? feedBackColor : ""}}
                            >
                            {color}
                        </button>
                    ))}
                </div>
             </div>
            <div className="result">{message}</div>
            {gameOver &&
                <div className="container">
                    <div className="reset-container">
                        <button className="reset" onClick={resetGame}>
                            Reset Game
                        </button>
                    </div>
                </div>
            }
        </div>
    );
};

export default ColorGuessingGame;

