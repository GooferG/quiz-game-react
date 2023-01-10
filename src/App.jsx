import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App container mx-auto font-karla">
      <div className="container mt-[100px] ">
        <Card />
      </div>
    </div>
  );
}

export default App;
