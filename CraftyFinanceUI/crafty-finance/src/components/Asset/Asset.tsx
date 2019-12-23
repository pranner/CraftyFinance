import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import './Asset.css';

export const Asset: React.FC<{ assetParentCallback: (n: any) => any }> =
  ({ assetParentCallback }) => {
    const [form, setState] = useState({
      chequing: 0,
      chequingInterest: 0,
      savingsForTaxes: 0,
      savingsForTaxesInterest: 0,
      rainyDayFund: 0,
      rainyDayFundInterest: 0,
      savingsForFun: 0,
      savingsForFunInterest: 0,
      savingsForTravel: 0,
      savingsForTravelInterest: 0,
      savingsForPersonalDevelopment: 0,
      savingsForPersonalDevelopmentInterest: 0,
      investment1: 0,
      investment1Interest: 0,
      investment2: 0,
      investment2Interest: 0,
      investment3: 0,
      investment3Interest: 0,
      investment4: 0,
      investment4Interest: 0,
      investment5: 0,
      investment5Interest: 0,
      primaryHome: 0,
      primaryHomeInterest: 0,
      secondHome: 0,
      secondHomeInterest: 0,
      other: 0,
      otherInterest: 0
    });

    const [totalAssets, setTotalAssets] = useState(0);

    useEffect(() => {
      const url = 'https://localhost:5001/asset';
      fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(response => response.json())
        .then(data => setTotalAssets(data))
        .then(assetParentCallback(totalAssets));
    });

    return (
      <div className="Asset">
        <h3>Assets</h3>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={12}>
            <hr />
            <h5>Cash and Investments</h5>
            <hr />
          </Grid>
          <Grid container item spacing={3} xs={12}>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
              Interest Rate (%)
          </Grid>
            <Grid item xs={4}>

            </Grid>
          </Grid>
          <Grid item xs={4}>
            Chequing
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="chequingInterest"
              id="chequingInterest"
              value={form.chequingInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="chequing"
              id="chequing"
              value={form.chequing}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Savings for Taxes
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForTaxesInterest"
              id="savingsForTaxesInterest"
              value={form.savingsForTaxesInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForTaxes"
              id="savingsForTaxes"
              value={form.savingsForTaxes}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Rainy Day Fund
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="rainyDayFundInterest"
              id="rainyDayFundInterest"
              value={form.rainyDayFundInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="rainyDayFund"
              id="rainyDayFund"
              value={form.rainyDayFund}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Savings for Fun
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForFunInterest"
              id="savingsForFunInterest"
              value={form.savingsForFunInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForFun"
              id="savingsForFun"
              value={form.savingsForFun}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Savings for Travel
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForTravelInterest"
              id="savingsForTravelInterest"
              value={form.savingsForTravelInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForTravel"
              id="savingsForTravel"
              value={form.savingsForTravel}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Savings for Personal Development
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForPersonalDevelopmentInterest"
              id="savingsForPersonalDevelopmentInterest"
              value={form.savingsForPersonalDevelopmentInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="savingsForPersonalDevelopment"
              id="savingsForPersonalDevelopment"
              value={form.savingsForPersonalDevelopment}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Investment 1
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment1Interest"
              id="investment1Interest"
              value={form.investment1Interest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment1"
              id="investment1"
              value={form.investment1}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Investment 2
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment2Interest"
              id="investment2Interest"
              value={form.investment2Interest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment2"
              id="investment2"
              value={form.investment2}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Investment 3
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment3Interest"
              id="investment3Interest"
              value={form.investment3Interest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment3"
              id="investment3"
              value={form.investment3}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Investment 4
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment4Interest"
              id="investment4Interest"
              value={form.investment4Interest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment4"
              id="investment4"
              value={form.investment4}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Investment 5
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment5Interest"
              id="investment5Interest"
              value={form.investment5Interest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="investment5"
              id="investment5"
              value={form.investment5}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={12}>
            <hr />
            <h5>Long Term Assets</h5>
            <hr />
          </Grid>
          <Grid item xs={4}>
            Primary Home
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="primaryHomeInterest"
              id="primaryHomeInterest"
              value={form.primaryHomeInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="primaryHome"
              id="primaryHome"
              value={form.primaryHome}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Second Home
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="secondHomeInterest"
              id="secondHomeInterest"
              value={form.secondHomeInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />

          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="secondHome"
              id="secondHome"
              value={form.secondHome}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Other
        </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="otherInterest"
              id="otherInterest"
              value={form.otherInterest}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
            />
          </Grid>
          <Grid item xs={4}>
            <Input
              type="number"
              name="other"
              id="other"
              value={form.other}
              onChange={e => {
                setState({ ...form, [e.target.name]: +e.target.value })
              }}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </Grid>
          <Grid item xs={4}>
            Total Assets
        </Grid>
          <Grid item xs={4}>

          </Grid>
          <Grid item xs={4}>
            $ {totalAssets}
          </Grid>
        </Grid>
      </div >
    )
  }
