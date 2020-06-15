import React from 'react';
import { Head } from './components/Head';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ReducerButtons } from './components/ReducerButtons';


const App = () => {
  return (
    <div className="App">
      <Head title="Hello" />
      <Button onClick={e => {
        e.preventDefault();
        console.log(e);
      }} >
        Hello FC
      </Button>
      <ReducerButtons />
      <Input />
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
