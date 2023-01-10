import React from 'react';

function Card(props) {
  return (
    <div className="flex flex-col text-center border border-red-500">
      <h1 className="font-bold">Quizzical</h1>
      <p className="text-sm">Some description if needed</p>
      <button
        onClick={props.start}
        className="btn bg-[#4D5B9E] rounded-full text-white"
      >
        Start quiz
      </button>
    </div>
  );
}

export default Card;
