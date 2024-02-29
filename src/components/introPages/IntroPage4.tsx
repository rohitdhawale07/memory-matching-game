import React from "react";
import { useNavigate, Link } from "react-router-dom";

const IntroPage4: React.FC = () => {
  const totalSteps = 6;
  const progressPercentage = (1 / totalSteps) * 100;
  const navigate = useNavigate();

  return (
    <>
      <div
        className="intro1 bg-cover bg-center w-screen h-screen p-0 m-0 relative"
        style={{ backgroundImage: 'url("/images/image1.png")' }}
      >
        <div className="flex items-center justify-center">
          <div className="w-2/5 text-center absolute flex items-center mt-20 h-8 bg-transparent border-4 border-grey rounded">
            <div
              className="h-full bg-yellow-500 rounded"
              style={{ width: `${progressPercentage}%` }}
            />
            <img
              src="/images/banana2.png"
              className="w-20 h-20 float"
              alt="Banana Progress"
            />
          </div>
        </div>
        <div className="cursor-pointer absolute">
          <img
            onClick={() => navigate(-1)}
            src="/images/arrow.png"
            className="w-40 h-40 ml-40 duration-300 hover:scale-105"
            alt="Back Arrow"
          />
        </div>

        <div className="flex items-center justify-center h-screen -mx-2">
          <div className="max-w-md p-4 mx-4 my-8 bg-white duration-300 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <img
              src="/images/bg1.png"
              // alt="Card Image"
              className="w-full h-32 bg-yellow-600 object-cover mb-4 rounded"
            />
            <h1 className="text-2xl font-bold mb-2 text-blue-600">
              Select a card.
            </h1>
            <p className="text-yellow-500 text-xl">it has images.</p>
          </div>
          <div className="max-w-md p-4 mx-4 my-8 bg-white duration-300 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <img
              src="/images/bg1.png"
              // alt="Card Image"
              className="w-full h-32 bg-yellow-600 object-cover mb-4 rounded"
            />
            <h1 className="text-2xl font-bold mb-2 text-blue-600">
              Select another card.
            </h1>
            <p className="text-yellow-500 text-xl">it has the same images.</p>
          </div>
          <div className="max-w-md p-4 mx-4 my-8 bg-white duration-300 shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <img
              src="/images/yay.png"
              // alt="Card Image"
              className="w-full h-32 bg-yellow-600 object-cover mb-4 rounded"
            />
            <h1 className="text-2xl font-bold mb-2 text-blue-600">
              It's a Match!.
            </h1>
            <p className="text-yellow-500 text-xl">Otherwise retry:(</p>
          </div>
        </div>

        <Link
          to="/activityPage"
          className="bottom-0 right-0 duration-300 absolute m-10 hover:scale-105"
        >
          <img src="/images/play.png" alt="Play Button" />
        </Link>
      </div>
    </>
  );
};

export default IntroPage4;
