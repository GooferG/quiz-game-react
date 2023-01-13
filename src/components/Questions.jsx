import React from 'react';

function Questions(props) {
  console.log(
    props.questions.map((question) => {
      return question.question;
    })
  );

  const quizQuestion = props.questions.map((question) => {
    let allAnswers = [];
    allAnswers.push(question.incorrect_answers.join(' , '));
    allAnswers.push(question.correct_answer);
    console.log('all answers:', allAnswers);
    return (
      <>
        <div className="text-center">
          {question.question.replaceAll('&quot;', '"')}
          <div className=" flex p-5 border bg-white ">
            <div className=" flex justify-between content-between border">
              {allAnswers.join(' , ')}
            </div>
          </div>
        </div>
      </>
    );
  });

  return <div className="">{quizQuestion}</div>;
}

export default Questions;
