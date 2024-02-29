import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const IntroPage2: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="intro1 bg-cover bg-center w-screen h-screen p-0 m-0 relative"
        style={{ backgroundImage: 'url("/images/image1.png")' }}
      >
        <div className="cursor-pointer">
          <img
            onClick={() => navigate(-1)}
            src="/images/arrow.png"
            className="absolute w-40 h-40 ml-40 duration-300 hover:scale-105"
            alt="Back Arrow"
          />
        </div>
        <div className="relative w-96 h-40 left-1/2 top-24">
          <img
            className="w-80 h-40"
            src="/images/cloud.png"
            alt="Cloud Background"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <div className="message-overlay absolute top-8 left-12 rounded-2xl text-center flex">
            <p className="message-text m-0 text-3xl font-bold text-blue-400">
              Hi, I am Mizo! <br /> and I love bananas
            </p>
            <img
              src="/images/banana.png"
              alt="Banana"
              className="w-10 h-10 transform rotate-[-40deg]"
            />
          </div>
        </div>
        <div className="flex items-center justify-center pl-20">
          <img
            className="mt-10 w-1/3 "
            src="/images/monkey2.png"
            alt="Monkey"
          />
          <Link
            to="/introPage3"
            className="float-right duration-300 mt-80 ml-20 hover:scale-105"
          >
            <img src="/images/next.png" alt="Next Button" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default IntroPage2;
