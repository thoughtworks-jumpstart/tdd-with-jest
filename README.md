# TDD with Jest

Let's get good at TDD! Work through the katas in this repo and practice your TDD chops. 

For this assignemnt, we will be using Jest, which is a popular javascript testing framework created and used by Facebook. 

### Instructions
- Clone the repo, `cd` into the repo
- Run `yarn install`
    - this will install the dependencies listed in `package.json` (for this assignment, it's only `jest`)
- The description for each kata is described in the respective files in `src/`. The corresponding tests are in `test/filename.test.js`. Implement the function to make the tests pass.
- To run the tests, run `yarn test` in your terminal.
    - Inside `package.json`, we have defined `yarn test` to execute the `jest` command, which will run all the tests in the project.
    - We have also defined 2 additional commands:
        - `yarn test:watch`, which is executing the `jest --watch` command. The `--watch` option will rerun the tests everytime you save a file.
        - `yarn test:coverage`, which is executing the `jest --coverage` command. The `--coverage` option produces a test coverage report after running the tests
- To quit the test runner, hit `q` in the terminal where `jest` is running.
- Do the assignments in this order:
    - `fizzbuzz.js`
    - `kebabize.js`
    - `expandNumber.js`
- Once you've passed the first test, change the next test from `test.skip(...)` to `test(...)`.
- Have fun! And enjoy the dopamines that come with seeing green!