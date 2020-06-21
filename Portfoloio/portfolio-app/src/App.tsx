import React from 'react';
import './App.css';
import Routes from './Router/Routes';
import { Header } from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      <Routes />
    </div>

  );
}

export default App;
