import React from 'react';
import { nanoid } from 'nanoid';
import { decode } from 'html-entities';
import './Quiz.css';

function Quiz(props) {
  const allAnswers = props.allAnswers;

  const selectedAnswer = (answer) => {
    if (props.quizData.checked) {
      return;
    }
    props.handleSelectedAnswer(props.id, answer);
  };

  const answerElement = allAnswers.map((answer) => {
    let id = null;
    if (props.quizData.checked) {
      if (answer === props.quizData.correctAnswer) {
        id = 'correct';
      } else if (answer === props.quizData.selected) {
        id = 'incorrect';
      } else {
        id = 'not-selected';
      }
    }
    return (
      <div
        id={id}
        className={
          props.quizData.selected === answer
            ? ' answer-button selected-answer-button'
            : 'answer-button'
        }
        key={nanoid()}
        onClick={() => selectedAnswer(answer)}
      >
        {decode(answer)}
      </div>
    );
  });

  return (
    <div>
      <div className="QuestionContainer w-full text-left mt-[20px] p-[5px] ml-[10px] sm:mt-[30px]">
        <div className="Question font-karla sm:m-auto flex-wrap">
          {decode(props.question)}
        </div>
        {answerElement}
      </div>
      <div className="LineDiv border-[1px] border-[#dbdef0] mt-[5px]"></div>
    </div>
  );
}

export default Quiz;
