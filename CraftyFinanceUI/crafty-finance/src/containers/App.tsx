import React from 'react';
import './App.css';
import { Asset } from '../components/Asset/Asset';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Asset chequing={30} />
        {/* <Liability></Liability> */}
      </header>
    </div>
  );
}

export default App;
