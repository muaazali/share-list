import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [darkMode, setdarkMode] = useState(false)

  return (
    <div className={`App ${darkMode ? 'tw-dark' : ''}`}>
      asd
    </div>
  );
}

export default App;
