import React from 'react';

function Questions(props) {
  console.log(
    props.questions.map((question) => {
      return question.question;
    })
  );

  const quizQuestion = props.questions.map((question) => {
    return question.question;
  });
  const quizAnswers = props.questions.map((question) => {
    return `${question.incorrect_answers}${question.correct_answer}`;
  });
  return (
    <div>
      {quizQuestion}
      {quizAnswers}
    </div>
  );
}

export default Questions;
