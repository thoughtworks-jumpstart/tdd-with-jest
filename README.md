# TDD with Jest

Let's get good at TDD! Work through the katas in this repo and practice your TDD chops. 

For this assignemnt, we will be using Jest, which is a popular javascript testing framework created and used by Facebook. 

### Instructions
- Fork and clone the repo
- `cd` into the repo
- Run `npm install`
    - this will install the dependencies listed in `package.json` (for this assignment, it's only `jest`)
- The description for each kata is described in the respective files in `src/`. The corresponding tests are in `test/filename.test.js`.
- To run the tests, run `npm test` in your terminal.
    - Inside `package.json`, we have defined `npm test` to execute the `jest` command, which will run all the tests in the project.
    - We have also defined 2 additional commands:
        - `npm run test:watch`, which is executing the `jest --watch` command. The `--watch` option will rerun the tests everytime you save a file.
        - `npm run test:coverage`, which is executing the `jest --coverage` command. The `--coverage` option produces a test coverage report after running the tests
- To quit the test runner, hit `q` in the terminal where `jest` is running.
- Do the assignments in this order:
    - `fizzbuzz.js`
    - `findMultiples.js`
    - `firstNonConsecutiveNumber.js`
- Once you've passed the first test, change the next test from `test.skip(...)` to `test(...)`.
- Have fun! And enjoy the dopamines that come with seeing green!

#### Troubleshooting
- If you were running `yarn test:watch` and your code was inadvertently caught in an infinite loop which results in Jest not finishing the tests.  
    - Run `ps aux | grep jest`
    - Take note of the process number `Jan              85451   0.4  0.7  4984888  56056 s003  S+    2:47PM   0:01.63 node /Users/Jan/Documents/Jumpstart/Code/tdd-with-jest/node_modules/.bin/jest --watch`
    - In this case, the process number is 85451
    - Then run `kill -9 85451` to kill the process

---
Copyright (c) 2018 ThoughtWorks. For personal use and training purposes only; not to be copied or distributed without further approval.
