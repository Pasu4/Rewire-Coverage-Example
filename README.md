# Rewire Coverage Example

Currently in VS Code extension development, functions tested with rewire don't show up in code coverage, even though they are being run.
This repository is a minimal example to reproduce this.

## Setup

I have committed the coverage to the repo, so you can skip steps 2&ndash;4 if you don't change any code.

1. Clone and open this repository: `git clone https://github.com/Pasu4/rewire-coverage-example.git`, `cd rewire-coverage-example`
2. Install dependencies: `npm install`
3. Compile the extension: `npm run compile`
4. Run the tests: `npm run test`
5. Open `coverage/index.html` in a browser and navigate to `src > `.

## Important Files

- `src/extension.ts`: `activate(...)` is basically the main function for extensions.
- `src/other_file.ts`: Contains the two tested functions (`coveredFunction` and `uncoveredFunction`).
- `src/test/suite/extension.test.ts`: Contains the unit tests.
