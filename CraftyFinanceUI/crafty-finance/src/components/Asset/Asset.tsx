// import React, { useEffect } from 'react';
import React from 'react';

type AssetProps = {
  chequing: number;
}

async function GetData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Access-Control-Allow-Origin': '',
      'Content-Type': 'application/json'
    },
  });
  return await response.json();
}

export const Asset: React.FC<AssetProps> = (assets) => {
  const assetsUrl = 'https://localhost:5001/asset'
  const response = GetData(assetsUrl);

  console.log(response);

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
            <td>{assets.chequing}</td>
          </tr>
          <tr>
            <td>Savings for Taxes</td>
            <td></td>
            <td></td>
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
            <td>$$$$$$</td>
          </tr>
        </tfoot>
      </table>
    </div >
  )
}
