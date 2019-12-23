// import React, { useEffect } from 'react';
import React, { useState, useEffect } from 'react';

export const Asset: React.FC = () => {
  const [form, setState] = useState({
    chequing: 0,
    savingsForTaxes: 0,
    rainyDayFund: 0,
    savingsForFun: 0,
    savingsForTravel: 0,
    savingsForPersonalDevelopment: 0,
    investment1: 0,
    investment2: 0,
    investment3: 0,
    investment4: 0,
    investment5: 0,
    primaryHome: 0,
    secondHome: 0
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
      .then(data => setTotalAssets(data));
  });


  return (
    <div className="Asset">
      <h3>Assets</h3>
      <table>
        <thead>
          <tr>
            <td>Cash and Investments</td>
            <td>Interest Rate</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chequing</td>
            <td></td>
            <td>
              <input
                name="chequing"
                type="number"
                value={form.chequing}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Savings for Taxes</td>
            <td></td>
            <td>
              <input
                name="savingsForTaxes"
                type="number"
                value={form.savingsForTaxes}
                onChange={e => {
                  setState({ ...form, [e.target.name]: +e.target.value })
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Rainy Day Fund</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Savings for Fun</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Savings for Travel</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Savings for Personal Development</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Investment 1</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Investment 2</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Investment 3</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Investment 4</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Investment 5</td>
            <td></td>
            <td></td>
          </tr>
          <tr><td>Long Term Assets</td></tr>
          <tr>
            <td>Primary Home</td>
            <td></td>
            <td></td>
          </tr><tr>
            <td>Second Home</td>
            <td></td>
            <td></td>
          </tr><tr>
            <td>Other</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Total Assets</td>
            <td>{totalAssets}</td>
          </tr>
        </tfoot>
      </table>
    </div >
  )
}
