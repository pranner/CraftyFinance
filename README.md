
# Crafty Finance: A Personal Finance Tracker App

Author: Pranjali Pokharel

A crafty app to help you take care of your finances. This app allows you to keep track of your assets and liabilties and come up with a total net worth based on these values. You can also see your final net worth in CAD, USD or AUD.

This repository includes both the C#, .NET API as well as the React front-end.

## Build instructions
You will need to have the following installed in order to run the application in development mode: 
- .NET version 3.1.100
- [Node.js version 12.14.X (includes npm 6.13.X)](https://nodejs.org/en/download/)
- typescript v3.7.4 `npm install -D typescript`

You will also need to have the API server running before you start using the front-end. To do this:
- `cd` into the `CraftyFinanceApi` folder
-  enter command `dotnet run` to run the server
- server should be running at `http://localhost:5000/`

For running the front-end app, open terminal or command line:
- `cd` into the `CraftyFinanceUI/crafty-finance` folder
- enter command `npm start` to run the server
- server should be running at `http://localhost:3000/`

### Dependencies
Install with `npm install -S [packagename]`
- react v16.12.0
- react-dom v16.12.0
- tslib v1.10.0
- @material-ui/core v4.8.0

## Known Issues & Assumptions:
- Currency Exchange Calculation has been done for the final net worth value only. It has also not been rounded (this is a bug).
- While the API has been tested manually, all unit tests have not been added yet. Ideally, unit tests should be added to test the Api calls, however I ran out of time to implement it. The Api was tested using Swagger. This can be accessed by going to `http://localhost:5000/swagger`or `https://localhost:5001/swagger'
- The net worth calculations are done in the front-end and not received from the API, this decision was made to showcase an understanding of Data transfer from Child to Parent component in React Hooks. I had already started working on doing the total Networth calculation on the React side before reading the part about this information coming from the API, so I did not have time to go back and change it.
- The fetching of data on the React front end assumes a 200 ok response and does not have a catch to catch other http statuses. (Ran out of time to implement this)
- BONUS: Monthly Calculations using the interest rate have not been completed yet. Right now it is just taking the liability amount and diving it by 12

## References Used
- [Initial installation and setup of React with TypeScript Configurations](https://fettblog.eu/typescript-react/getting-started/)
- [Debugging and working with React in VSCode](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
- [Fetching Data with React hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
- [Installing Material UI](https://material-ui.com/getting-started/installation/)
- [Sending Data from Child to Parent Component React hooks](https://stackoverflow.com/questions/55726886/react-hook-send-data-from-child-to-parent-component)

