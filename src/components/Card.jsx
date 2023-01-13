import React from 'react';

function Card(props) {
  return (
    <div className="flex text-center border w-[550px] h-[550px] bg-[#F5F7FB]">
      <div className="container flex flex-col justify-center	">
        <h1 className="font-bold text-[2rem] ">Quizzical</h1>
        <p className="text-sm pb-8 ">Some description if needed</p>
        <button
          onClick={props.start}
          className="btn h-[52px] w-[193px] rounded-[18px] text-white self-center"
        >
          Start quiz
        </button>
      </div>
    </div>
  );
}

export default Card;
