===================Project Setup and Running Instructions ===========================

Prerequisites:

Node.js and npm  installed on your system.


Installation:

Clone the Repository:
Bash

git clone https://github.com/theskdhakal/rp-coding-challenge
Install Dependencies:
Bash

cd rp-coding-challene
npm install

Running the Project:

Compile TypeScript:

tsc

Start the Application:
npm start


Running Tests:
npm test


=================================Project Structure:=======================

project_root
├── data.json
├── src
│   ├── index.ts
│   ├── test
│   │   └── index.test.ts
│   ├── helper
│   │   ├── functions.ts
│   │   └── utils.ts
├── dist
│   ├── index.js
│   └── test.js
├── package.json
├── tsconfig.json
├── node_modules
Key Components:

data.json: Contains the input data for the calculations.
src directory:
index.ts: Main application file.
test directory: Contains test cases for the functions.
helper directory: Contains helper functions for calculations and formatting.
dist directory: Contains the compiled JavaScript files.
package.json: Manages project dependencies and scripts.
tsconfig.json: Configures the TypeScript compiler.
node_modules: Contains installed dependencies.
