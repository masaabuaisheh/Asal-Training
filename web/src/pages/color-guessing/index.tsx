import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

const ColorGuessingGame = () => {
    const [boxColor, setBoxColor] = useState("#000000");
    const [buttonColor, setButtonColor] = useState(["#000000", "#000000", "#000000"]);
    const [message, setMessage] = useState("");
    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [wrongGuesses, setWrongGuesses] = useState(0);
    const roundsRef = useRef(0); // Track rounds
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

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
        setGameStarted(true); 
    };

    const handleGuess = (guessColor: string) => {
        roundsRef.current += 1;

        if (guessColor === boxColor) {
            setCorrectGuesses((prevGuesses) => prevGuesses + 1);
        } else {
            setWrongGuesses((prevGuesses) => prevGuesses + 1);
        }

        if (roundsRef.current < 5) {
            startGame();
        } else {
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setCorrectGuesses(0);
        setWrongGuesses(0);
        roundsRef.current = 0;
        setMessage('');
        setGameOver(false);
        setGameStarted(false); 
        startGame();
    };

    useEffect(() => {
        if (roundsRef.current === 5) {
            if (correctGuesses === 5) {
                setMessage('All guesses are correct!');
            } else {
                setMessage(`Try guessing again. Wrong guesses: ${wrongGuesses} Correct guesses: ${correctGuesses}`);
            }
        }
    }, [roundsRef.current, correctGuesses, wrongGuesses]);

    useEffect(() => {
        if (gameStarted) {
            startGame();
        }
    }, [gameStarted]);

    return (
        <div className="main-class">
            <div className="title">Color Guessing Game</div>
            <Link className='back-home' href="/">Back</Link>
            {!gameStarted && (
                <div className="start-button-container">
                    <button className="start-button" onClick={startGame}>
                        Ready to play? Click here to start the game!
                    </button>
                </div>
            )}
            <div className="box" style={{ backgroundColor: boxColor }}></div>
            {buttonColor.map((color, index) => (
                <button
                    key={index}
                    className={`btn${index + 1}`}
                    onClick={() => handleGuess(color)}
                >
                    {color}
                </button>
            ))}
            <div className="result">{message}</div>
            {gameOver &&
                <div>
                    <button className="reset" onClick={resetGame}>
                        Reset Game
                    </button>
                </div>
            }
        </div>
    );
};

export default ColorGuessingGame;
