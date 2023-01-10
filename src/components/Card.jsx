import React from 'react';

function Card(props) {
  return (
    <div className="flex flex-col text-center border">
      <h1 className="font-bold">Quizzical</h1>
      <p className="text-sm">Some description if needed</p>
      <button
        onClick={props.start}
        className="btn h-[52px] w-[193px] bg-[#4D5B9E] rounded-full text-white self-center"
      >
        Start quiz
      </button>
    </div>
  );
}

export default Card;
