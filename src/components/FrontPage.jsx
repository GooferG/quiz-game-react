import React from 'react';

export default function FrontPage(props) {
  return (
    <div className="text-center frontpage-container">
      <div className="frontpage-content-container">
        <h1>Quizzzzz</h1>
        <p>Good luck on your quiz!</p>
        <button onClick={() => props.startQuiz()}>Start Quiz</button>
      </div>
    </div>
  );
}
