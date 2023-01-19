import { useState } from 'react';
import Card from './components/Card';
import Quiz from './components/Quiz';
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
  };

  return (
    <div className="App mx-auto py-20">
      <div className="bg-white p-5">
        {!quizStarted ? <Card start={startQuiz} /> : <Quiz />}
      </div>
    </div>
  );
}

export default App;
