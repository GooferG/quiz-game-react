import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './components/Quiz.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="bg-slate-200 h-screen w-screen">
      <App />
    </div>
  </React.StrictMode>
);
