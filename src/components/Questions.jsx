import React from 'react';

function Questions(props) {
  const quizQuestion = props.questions.map((question, index) => {
    let allAnswers = [...question.incorrect_answers, question.correct_answer];

    function shuffleArr(arr) {
      return arr.sort(() => Math.random() - 0.5);
    }

    const shuffledAnswers = shuffleArr(allAnswers);

    return (
      <>
        <div className="text-left pt-3">
          {question.question
            .replaceAll('&quot;', '"')
            .replaceAll('&#039;', "'")}
          <div className=" flex p-5  bg-white">
            <div className=" flex justify-between content-between gap-8">
              {shuffledAnswers.map((answer) => (
                <>
                  {' '}
                  <div
                    className=" border-[#293264] text-[10px] p-1 rounded-xl cursor-pointer outline outline-[.5px] "
                    key={props.id}
                    onClick={props.selector}
                  >
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
