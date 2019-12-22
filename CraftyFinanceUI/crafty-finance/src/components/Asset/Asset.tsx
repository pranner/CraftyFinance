import React, { useEffect } from 'react';

type AssetProps = {
  chequing: number;
}

export const Asset: React.FC<AssetProps> = (assets_data) => {
  const assetsUrl = 'http://localhost:5000/asset'
  fetch(assetsUrl, { mode: "no-cors" })
    .then(
      function (response) {
        console.log(response)
        if (response.status !== 200) {
          console.log('Something went wrong in Assets. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function (data) {
          console.log(data);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
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
            <td>{assets_data.chequing}</td>
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
