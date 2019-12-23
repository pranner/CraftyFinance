import React from 'react';
import './App.css';
import { Asset } from '../components/Asset/Asset';
import { Liability } from '../components/Liability/Liability';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <span>
        <Asset />
        <Liability />
      </span>
    </div>
  );
}

export default App;
