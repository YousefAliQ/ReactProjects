import React from 'react';
import {Head} from './components/Head';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Head title ="Hello" />
      <header className="App-header">
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
