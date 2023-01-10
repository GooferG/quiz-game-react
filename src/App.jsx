import { useState } from 'react';
import Card from './components/Card';
import Quiz from './components/Quiz';

function App() {
  const [started, setStarted] = useState(false);

  function startQuiz() {
    setStarted(true);
  }

  return (
    <div className="App container mx-auto font-karla">
      <div className="container mt-[100px] ">
        {started ? <Quiz /> : <Card start={startQuiz} />}
      </div>
    </div>
  );
}

export default App;
