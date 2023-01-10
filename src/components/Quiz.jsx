import React, { useEffect, useState } from 'react';

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

  const question = quiz.map((question) => {
    return (
      <div className="question">
        <h2 className="font-bold">
          Question:
          {question.question}
        </h2>
      </div>
    );
  });

  return (
    <div>
      <h2>Here is your Quiz:</h2>
      {question}
    </div>
  );
}

export default Quiz;
