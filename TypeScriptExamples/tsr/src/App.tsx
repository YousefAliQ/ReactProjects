import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = ({ hi }: { hi: string }) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1> { hi } </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Write <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
