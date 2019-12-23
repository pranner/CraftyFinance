import React, { useState } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Asset } from '../components/Asset/Asset';
import { Liability } from '../components/Liability/Liability';

const App: React.FC = () => {
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilites] = useState(0);
  const [totalNetworth, setTotalNetworth] = useState(0);
  const [currencyDropdown, setCurrencyDropdown] = useState("CAD");
  const [currencyRate, setCurrencyRate] = useState(1);
  const assetCallback = (totalAssetsCallBack: any) => {
    setTotalAssets(totalAssetsCallBack);
    setTotalNetworth((totalAssets - totalLiabilities) * currencyRate);
  };
  const liabilityCallback = (totalLiabilitiesCallback: any) => {
    setTotalLiabilites(totalLiabilitiesCallback);
    setTotalNetworth((totalAssets - totalLiabilities) * currencyRate);
  }

  var xchangeRates = new Map();
  xchangeRates.set("CAD", 1);

  const currencyChange = async (event: any) => {
    const xchangeUrl = 'https://api.exchangeratesapi.io/latest?base=CAD&symbols=USD,AUD';
    await fetch(xchangeUrl, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        xchangeRates.set("USD", data.rates.USD);
        xchangeRates.set("AUD", data.rates.AUD);
      });

    console.log(xchangeRates);

    setCurrencyDropdown(event.target.value);
    setCurrencyRate(xchangeRates.get(event.target.value));
    setTotalNetworth((totalAssets - totalLiabilities) * currencyRate);
  }
  return (
    <div className="App">
      <header className="App-header">
        Crafty Finance: Networth Tracker
        <hr />
      </header>
      <Grid container item xs={12} spacing={3}>
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={2}><h4>Currency:</h4></Grid>
          <Grid item xs={10}>
            <Select
              id='currencySelector'
              value={currencyDropdown}
              onChange={currencyChange}
            >
              <MenuItem value="CAD">CAD</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="AUD">AUD</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={6}>
            <h3>Net Worth</h3>
          </Grid>
          <Grid className="Total-networth" item xs={6}>
            <h3>$ {totalNetworth} </h3>
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={3}>
        <Grid item md={6}>
          <Asset assetParentCallback={assetCallback} />
        </Grid>
        <Grid item md={6}>
          <Liability liabilityParentCallback={liabilityCallback} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
