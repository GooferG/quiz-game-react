import { useState, useEffect } from 'react';
import Frontpage from './components/FrontPage';
import Quiz from './components/Quiz';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
  const [quizData, setQuizData] = useState([]);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [count, setCount] = useState(0);

  const randomizeAnswers = (arr) => arr.sort(() => Math.random() - 0.5);

  // Get Quiz data and set it in state when quiz starts
  useEffect(() => {
    const getQuizData = async () => {
      const res = await fetch('https://opentdb.com/api.php?amount=5');
      const data = await res.json();

      const customQuizData = [];
      data.results.forEach((item) => {
        customQuizData.push({
          id: nanoid(),
          allAnswers: randomizeAnswers([
            ...item.incorrect_answers,
            item.correct_answer,
          ]),
          question: item.question,
          correctAnswer: item.correct_answer,
          selected: null,
          checked: false,
        });
        setQuizData(customQuizData);
      });
    };
    getQuizData();
  }, [count]);

  // Start quiz
  const handleStartQuiz = () => {
    setQuizStarted((prevState) => !prevState);
  };

  // Play again / restart quiz
  const quizPlayAgain = () => {
    setCount((count) => count + 1);
    setChecked(false);
  };

  // Review all answers to check if correct
  const handleCheckAnswer = () => {
    let selected = true;

    quizData.forEach((prevQuizData) => {
      if (prevQuizData.selected == null) {
        selected = false;
        return;
      }
    });
    if (!selected) {
      return;
    }
    setQuizData((prevQuizData) =>
      prevQuizData.map((data) => {
        return {
          ...data,
          checked: true,
        };
      })
    );
    setChecked(true);
    let currentScore = 0;
    quizData.forEach((prevQuizData) => {
      if (prevQuizData.correctAnswer === prevQuizData.selected) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
  };

  // Update previous quiz data to show the answer selection
  const handleSelectedAnswer = (id, selectedAnswer) => {
    setQuizData((quizData) =>
      quizData.map((data) => {
        return data.id === id ? { ...data, selected: selectedAnswer } : data;
      })
    );
  };

  const questionElement = quizData.map((data) => {
    return (
      <Quiz
        id={data.id}
        key={data.id}
        question={data.question}
        allAnswers={data.allAnswers}
        quizData={data}
        handleSelectedAnswer={handleSelectedAnswer}
      />
    );
  });

  return (
    <div className="main-container">
      {quizStarted ? (
        <div className="content-container">
          {questionElement}
          <div>
            {checked && <div>You Scored {score}/5 correct answers </div>}

            <button
              className="submit-button"
              onClick={checked ? handlePlayAgain : handleCheckAnswer}
            >
              {checked ? 'Play Again' : 'Check Answers'}
            </button>
          </div>
        </div>
      ) : (
        <Frontpage startQuiz={handleStartQuiz} />
      )}
    </div>
  );
}

export default App;
