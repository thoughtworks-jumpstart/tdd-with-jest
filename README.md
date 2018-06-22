# TDD with Jest

**This contains the solutions**. [See the original code here][master]

Let's get good at TDD! Work through the katas in this repo and practice your
TDD chops. 

For this assignemnt, we will be using Jest, which is a popular javascript
testing framework created and used by Facebook. 

### Instructions

- Fork and clone the repo

- `cd` into the repo

- Run `npm install`

    - this will install the dependencies listed in `package.json` (for this
      assignment, it's only `jest`)

- The description for each kata is described in the respective files in `src/`.
  The corresponding tests are in `test/filename.test.js`.

- To run the tests, run `npm test` in your terminal.

    - Inside `package.json`, we have defined `npm test` to execute the `jest`
      command, which will run all the tests in the project.

    - We have also defined 2 additional commands:

        - `npm run test:watch`, which is executing the `jest --watch` command.
          The `--watch` option will rerun the tests everytime you save a file.

        - `npm run test:coverage`, which is executing the `jest --coverage`
          command. The `--coverage` option produces a test coverage report
          after running the tests

- To quit the test runner, hit `q` in the terminal where `jest` is running.

- Do the assignments in this order:
    - `fizzbuzz.js`
    - `sumWithoutHighestAndLowest.js`
    - `firstNonConsecutiveNumber.js`
    - `findMultiples.js`

- Once you've passed the first test, change the next test from `test.skip(...)`
  to `test(...)`.

- Have fun! And enjoy the dopamines that come with seeing green!

## Part 2: Testing state

- Add tests for the methods in `account.js`

- Update the `deposit()` method so that it does nothing when the account
	balance before depositing is 5000 or more

- Update the `withdraw()` method so that it does nothing when the account
	balance before withdrawing is 0 or less

[master]: https://github.com/thoughtworks-jumpstart/tdd-with-jest