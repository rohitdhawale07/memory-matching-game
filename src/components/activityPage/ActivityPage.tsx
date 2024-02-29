import React, { useState, useRef } from "react";
import "./ActivityPage.css";
import shuffle from "./Shuffle";
// import "../../App.css";

interface Card {
  index: number | null;
  value: number | null;
}

const items = [1, 2, 3, 4, 5, 6];
const allItems = shuffle([...items, ...items]);
const defaultState: Card = { index: null, value: null };

const MemoryGame: React.FC = () => {
  const [firstCard, setFirstCard] = useState<Card>(defaultState);
  const [secondCard, setSecondCard] = useState<Card>(defaultState);
  const [remainingCards, setRemainingCards] = useState<number[]>(items);
  const [moves, setMoves] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const timer = useRef<NodeJS.Timeout>();

  const handleClick = (index: number, value: number) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      setFirstCard(defaultState);
      setSecondCard(defaultState);
    }, 1500);

    if (moves >= 30) {
      setGameOver(true);
      return;
    }

    if (
      firstCard.index === null ||
      (firstCard.index !== null && secondCard.index !== null)
    ) {
      setSecondCard(defaultState);
      setFirstCard({ index, value });
      setMoves((moves) => moves + 1);
    } else if (secondCard.index === null && firstCard.index !== index) {
      setSecondCard({ index, value });
      setMoves((moves) => moves + 1);

      if (firstCard.value === value) {
        setRemainingCards(remainingCards.filter((card) => card !== value));
      }
   
    }
  };

  const handleTryAgain = () => {
    setFirstCard(defaultState);
    setSecondCard(defaultState);
    setRemainingCards(items);
    setMoves(0);
    setGameOver(false);
  };

  const totalSteps = 6;
  const progressPercentage = Math.round(
    ((totalSteps - remainingCards.length) / totalSteps) * 100
  );

  return (
    <>
      <div className="h-screen w-full container mx-auto flex flex-col items-center justify-center">
        {!gameOver && remainingCards.length > 0 ? (
          `Remaining cards: ${remainingCards.length}`
        ) : (
          <h1 className="text-4xl text-blue-500 font-bold">Victory!!:)</h1>
        )}
        {gameOver && (
          <p className="text-red-600 text-4xl mb-5 font-bold">You Lost!</p>
        )}
        <div className="flex items-center justify-center">
          <div className="w-2/5 absolute flex -mt-40 items-center h-8 bg-transparent border-4 border-grey rounded">
            <div
              className="h-full bg-yellow-500 rounded"
              style={{ width: `${progressPercentage}%` }}
            />
            <img src="/images/banana2.png" className="w-20 h-20 float" />
          </div>
        </div>
        <div className="cardsContainer">
          {allItems.map((item, index) => (
            <div
              key={index}
              className={`card ${
                (firstCard.index === index ||
                  secondCard.index === index ||
                  !remainingCards.includes(item)) &&
                "flipped"
              }`}
              onClick={() => handleClick(index, item)}
            >
              <div className="backSide"></div>
              <img alt={`${index}`} src={`images/card${item}.png`} />
            </div>
          ))}
        </div>
        {gameOver && (
          <button
            className="bg-blue-500 float-right p-2 text-white rounded-md hover:bg-blue-700 text-Green-600"
            onClick={handleTryAgain}
          >
            Try Again
          </button>
        )}
        Moves used: {moves}/30
      </div>
    </>
  );
};

export default MemoryGame;
