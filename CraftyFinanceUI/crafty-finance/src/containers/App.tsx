import React from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { Asset } from '../components/Asset/Asset';
import { Liability } from '../components/Liability/Liability';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        Crafty Finance: Networth Tracker
      </header>
      <Grid container item xs={12} spacing={3}>
        <Grid item md={6}>
          <Asset />
        </Grid>
        <Grid item md={6}>
          <Liability />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
