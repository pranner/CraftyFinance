import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import './Liability.css';

export const Liability: React.FC<{ liabilityParentCallback: (n: any) => any }> =
  ({ liabilityParentCallback }) => {
    const [form, setState] = useState({
      creditCard1: 0,
      creditCard1Interest: 0,
      creditCard2: 0,
      creditCard2Interest: 0,
      otherCredit: 0,
      otherCreditInterest: 0,
      mortgage1: 0,
      mortgage1Interest: 0,
      mortgage2: 0,
      mortgage2Interest: 0,
      lineOfCredit: 0,
      lineOfCreditInterest: 0,
      investmentLoan: 0,
      investmentLoanInterest: 0,
      studentLoan: 0,
      studentLoanInterest: 0,
      carLoan: 0,
      carLoanInterest: 0,
    });

    const [totalLiabilities, setTotalLiabilites] = useState(0);

    useEffect(() => {
      const url = 'https://localhost:5001/liability';
      fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(response => response.json())
        .then(data => setTotalLiabilites(data))
        .then(liabilityParentCallback(totalLiabilities));
    });

    return (
      <div className="Liability">
        <h3>Liabilities</h3>
        <Grid container item xs={12} spacing={3}>
          <Grid container item spacing={3} xs={12}>
            <Grid item xs={12}>
              <hr />
              <h5>Short Term Liabilities</h5>
              <hr />
            </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={3}>
              Monthly Payment
          </Grid>
            <Grid item xs={3}>
              Interest Rate (%)
          </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={3}>
              Credit Card 1
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.creditCard1 / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="creditCard1Interest"
                id="creditCard1Interest"
                value={form.creditCard1Interest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="creditCard1"
                id="creditCard1"
                value={form.creditCard1}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Credit Card 2
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.creditCard2 / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="creditCard2Interest"
                id="creditCard2Interest"
                value={form.creditCard2Interest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="creditCard2"
                id="creditCard2"
                value={form.creditCard2}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Other Credit
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.otherCredit / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="otherCreditInterest"
                id="otherCreditInterest"
                value={form.otherCreditInterest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="otherCredit"
                id="otherCredit"
                value={form.otherCredit}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={12}>
              <hr />
              <h5>Long Term Debt</h5>
              <hr />
            </Grid>
            <Grid item xs={3}>
              Mortgage 1
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.mortgage1 / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="mortgage1Interest"
                id="mortgage1Interest"
                value={form.mortgage1Interest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="mortgage1"
                id="mortgage1"
                value={form.mortgage1}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Mortage 2
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.mortgage2 / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="mortgage2Interest"
                id="mortgage2Interest"
                value={form.mortgage2}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="mortgage2"
                id="mortgage2"
                value={form.mortgage2}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Line Of Credit
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.lineOfCredit / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="lineOfCreditInterest"
                id="lineOfCreditInterest"
                value={form.lineOfCreditInterest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="lineOfCredit"
                id="lineOfCredit"
                value={form.lineOfCredit}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Investment Loan
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.investmentLoan / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="investmentLoanInterest"
                id="investmentLoanInterest"
                value={form.investmentLoanInterest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="investmentLoan"
                id="investmentLoan"
                value={form.investmentLoan}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Student Loan
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.studentLoan / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="studentLoanInterest"
                id="studentLoanInterest"
                value={form.studentLoanInterest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="studentLoan"
                id="studentLoan"
                value={form.studentLoan}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Car Loan
          </Grid>
            <Grid item xs={3}>
              {Math.round(form.carLoan / 12)}
            </Grid>
            <Grid item xs={3}>
              <Input
                name="carLoanInterest"
                id="carLoanInterest"
                value={form.carLoanInterest}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="carLoan"
                id="carLoan"
                value={form.carLoan}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
              />
            </Grid>
            <Grid item xs={3}>
              Total Liabilities
          </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={3}>

            </Grid>
            <Grid item xs={3}>
              $ {totalLiabilities}
            </Grid>
          </Grid>
        </Grid>
      </div>)
  }