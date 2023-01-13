import React, { useEffect, useState } from 'react';
import Questions from './Questions';

function Quiz() {
  const [quiz, setQuiz] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function getQuiz() {
      const res = await fetch('https://opentdb.com/api.php?amount=5');
      const data = await res.json();
      setQuiz(data.results);
    }
    getQuiz();
  }, []);
  console.log(quiz);

  return (
    <div>
      <div className="flex text-center flex-col text-[#293264] font-bold">
        {/* {question} */}
        <Questions questions={quiz} />
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
