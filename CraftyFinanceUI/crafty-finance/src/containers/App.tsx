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
        <hr />
      </header>
      <Grid container item xs={12} spacing={3}>
        <Grid item xs={12}>
          Select Curreny: CAD
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <h3>Net Worth</h3>
          </Grid>
          <Grid className="Total-networth" item xs={6}>
            <h3>$ Assets-Liabilities</h3>
          </Grid>
        </Grid>
      </Grid>
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
