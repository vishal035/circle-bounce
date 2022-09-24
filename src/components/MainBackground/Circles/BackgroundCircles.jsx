import React from 'react';

const BackgroundCircles = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 flex flex-col items-center bg-gray-900 ">
      <div className="absolute top-28 w-80 h-80 bg-green-400 rounded-full animate-bounce-slow blur-3xl"></div>
      <>
        <div className="absolute flex flex-col justify-center items-center top-28 w-96 h-96 bg-green-400 rounded-full animate-bounce-slow blur-xl">
          <div className="relative top-28 w-96 h-96 bg-violet-600 black rounded-full animate-bounce-slow blur-xl"></div>
          <div className="relative top-0 w-96 h-96 bg-blue-600 mix-blend-difference black rounded-full animate-bounce-slow blur-xl"></div>
        </div>
      </>
    </div>
  );
};

export default BackgroundCircles;
