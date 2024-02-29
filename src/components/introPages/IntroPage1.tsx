import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

const IntroPage1: React.FC = () => {
  return (
    <>
      <div
        className="intro1 bg-cover bg-center w-screen h-screen p-0 m-0 relative"
        style={{ backgroundImage: 'url("/images/image1.png")' }}
      >
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
          <div className="message-overlay absolute top-12 left-20 rounded-2xl text-center">
            <p className="message-text m-0 text-4xl font-bold text-blue-400">
              Welcome kiddo!
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center pl-20">
          <img
            className="mt-10 w-1/3 "
            src="/images/monkey2.png"
            alt="monkey"
          />
          <Link to="/introPage2" className="float-right duration-300 mt-80 ml-20 hover:scale-105">
            <img src="/images/start.png" alt="Start Button" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default IntroPage1;
