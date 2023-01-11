import React, { useEffect, useState } from 'react';
import Questions from './Questions';

function Quiz() {
  const [quiz, setQuiz] = useState([]);

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
      <h2 className="underline font-bold">Here is your Quiz:</h2>
      <div className="border bg-slate-100 flex">
        {/* {question} */}
        <Questions questions={quiz} />
      </div>
    </div>
  );
}

export default Quiz;
