import React from 'react';

function Questions(props) {
  console.log(
    props.questions.map((question) => {
      return question.question;
    })
  );

  const quizQuestion = props.questions.map((question) => {
    return (
      <>
        <div className="text-center">
          {question.question.replaceAll('&quot;', '"')}
          <div className=" flex p-10 border bg-white ">
            <div className=" flex justify-between content-between">
              {question.incorrect_answers}
              {question.correct_answer}
            </div>
          </div>
        </div>
      </>
    );
  });

  return <div className="">{quizQuestion}</div>;
}

export default Questions;
