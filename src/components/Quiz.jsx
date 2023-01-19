import React, { useEffect, useState } from 'react';
import Questions from './Questions';
import { nanoid } from 'nanoid';

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [results, setResults] = useState([]);

  function clickTracker(e) {
    const selectedAsnwers = e.target.outerText;
    console.log(selectedAsnwers, e.target);
    setResults((prevState) => ({
      ...prevState,
      answer: e.target.outerText,
    }));
  }
  console.log('resuls state:', results, 'quiz:', quiz);

  // const exampleObj = [
  //   {
  //     q: 'Question 1',
  //     a: [
  //       {a: "a1", isAnswer: false},
  //       {a: "a2", isAnswer: false},
  //       {a: "a3", isAnswer: true},
  //       {a: "a4", isAnswer: false},
  //     ]
  //   },
  //   {
  //     q: 'Question 2',
  //     a: [
  //       {a: "a1", isAnswer: false},
  //       {a: "a2", isAnswer: false},
  //       {a: "a3", isAnswer: true},
  //       {a: "a4", isAnswer: false},
  //     ]
  //   },
  //   {
  //     q: 'Question 3',
  //     a: [
  //       {a: "a1", isAnswer: false},
  //       {a: "a2", isAnswer: false},
  //       {a: "a3", isAnswer: true},
  //       {a: "a4", isAnswer: false},
  //     ]
  //   },
  // ];

  useEffect(() => {
    async function getQuiz() {
      const res = await fetch('https://opentdb.com/api.php?amount=5');
      const data = await res.json();
      console.log(data.results);

      setQuiz(data.results);
      setResults(
        data.results.map((question) => ({
          correct_answer: question.correct_answer,
        }))
      );
    }
    getQuiz();
  }, []);

  return (
    <div>
      <div className="flex text-center flex-col text-[#293264] font-bold">
        {/* {question} */}
        <Questions questions={quiz} selector={clickTracker} id={nanoid()} />
      </div>
      <div className="flex justify-center pt-10">
        <button className="btn h-[52px] w-[193px] bg-[#4D5B9E] rounded-[18px] text-white justify-">
          Submit Quiz
        </button>
      </div>
    </div>
  );
}

export default Quiz;
