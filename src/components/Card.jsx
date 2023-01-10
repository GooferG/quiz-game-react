import React from 'react';

function Card() {
  return (
    <div className="flex flex-col text-center">
      <h1 className="font-bold">Quizzical</h1>
      <p className="text-sm">Some description if needed</p>
      <button className="btn">Start quiz</button>
    </div>
  );
}

export default Card;
