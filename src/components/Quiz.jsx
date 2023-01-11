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
      <div className="flex text-center border bg-[#F5F7FB] flex-col ">
        {/* {question} */}
        <Questions questions={quiz} />
      </div>
    </div>
  );
}

export default Quiz;
