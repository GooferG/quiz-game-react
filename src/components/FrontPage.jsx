import React from 'react';
import './Quiz.css';

export default function FrontPage(props) {
  return (
    <div className="text-center frontpage-container">
      <div className="frontpage-content-container">
        <h1 className="text-center font-karla text-[31.25px] leading-[50px] text-[#293264]">
          Quizzzzz
        </h1>
        <p className="font-karla font-normal text-md text-[#293264]">
          Good luck on your quiz!
        </p>
        <button
          className="bg-[#4d5b9e] rounded-xl text-[#f5f7fb] w-[170px] h-[45px] flex justify-center items-center m-auto font-karla text-md text-center cursor-pointer"
          onClick={() => props.startQuiz()}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
