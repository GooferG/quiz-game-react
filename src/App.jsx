import { useState } from 'react';
import Card from './components/Card';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  const [started, setStarted] = useState(false);

  function startQuiz() {
    setStarted(true);
  }

  return (
    <div className="App mx-auto">
      <div className="mt-[100px]">
        {started ? <Quiz /> : <Card start={startQuiz} />}
      </div>
    </div>
  );
}

export default App;
