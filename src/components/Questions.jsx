import React from 'react';

function Questions(props) {
  console.log(
    props.questions.map((question) => {
      return question.question;
    })
  );

  const quizQuestion = props.questions.map((question) => {
    let allAnswers = [...question.incorrect_answers, question.correct_answer];

    console.log('all answers:', allAnswers);
    return (
      <>
        <div className="text-left pt-3">
          {question.question.replaceAll('&quot;', '"')}
          <div className=" flex p-5  bg-white">
            <div className=" flex justify-between content-between gap-8">
              {/* {allAnswers.join(' , ')} */}
              {allAnswers.map((answer) => (
                <>
                  {' '}
                  <div className="border border-[#293264] text-xs p-1 rounded-xl cursor-pointer">
                    {answer}
                  </div>
                </>
              ))}
            </div>
          </div>
          <div className="border-b border-[#DBDEF0] w-full p-1"></div>
        </div>
      </>
    );
  });

  return <div className="">{quizQuestion}</div>;
}

export default Questions;
