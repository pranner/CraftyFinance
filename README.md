
# Crafty Finance: A Personal Finance Tracker App

Author: Pranjali Pokharel

A crafty app to help you take care of your finances. This repository includes both the .NET API as well as the React front-end.

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

## Kown Issues/Bugs:
- While the API has been tested manually, unit tests have not been added yet
- Currency Exchange Calculation has not been completed yet
- BONUS: Monthly Calculations using the interest rate have not been completed yet. Right now it is just taking the liability amount and diving it by 12

## References Used
- [Initial installation and setup of React with TypeScript Configurations](https://fettblog.eu/typescript-react/getting-started/)
- [Debugging and working with React in VSCode](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial)
- [Fetching Data with React hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
- [Installing Material UI](https://material-ui.com/getting-started/installation/)
- [Sending Data from Child to Parent Component React hooks](https://stackoverflow.com/questions/55726886/react-hook-send-data-from-child-to-parent-component)

