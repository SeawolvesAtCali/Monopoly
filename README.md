# Monopoly

[![Build Status](https://travis-ci.org/SeawolvesAtCali/Monopoly.svg?branch=master)](https://travis-ci.org/SeawolvesAtCali/Monopoly)

Online Monopoly using socket.io

# Install

make sure you have [node](https://nodejs.org/en/) installed, the recommended version is 9.11.1 and
up.

To install dependencies, run the following command in project root directory:

```
npm install
```

# Test

This project uses [jest](https://facebook.github.io/jest/) as the testing framework.

All the test should be inside `__test__` folder next to the source file. For example, if we have a
file `server/something/testMe.js`, its test should be at `server/something/testMe.test.js`

test file should use the same name as the source file, plus `.test.js` ending.

To run all the test

```
npm test
```

To run just one test file, for example `server/__test__/index.test.js`

```
npm test server/__test__/index.test.js
```

To run a file in watch mode(automatically rerun the test when any related files change)

```
npm test server/__test__/index.test.js -- --watch
```

# Debugging

This project uses [debug](https://github.com/visionmedia/debug), the same logging library that
Socket.io uses. To enable debugging, set `DEBUG` environment variables before running the script.

To see all the debugging messages from Socket.io, use `DEBUG="socket.io*"`. For example

```
env DEBUG="socket.io*" npm run start:server
```

In the code, we should use `debug` instead of `console.log` for debug messages.

```
const debug = require('debug')('debug'); // Import debug and set the debug message label to `debug`

debug('Hello world'); // This will print "debug: Hello world"
```

To see all the logs with 'debug' label, use

```
env DEBUG="debug" npm run start:server
```

Debugging using Visual Studio Code is super easy.

1.  In the debug panel, click on the gear icon to create a `launch.json`.
2.  The content of the json file could be as simple as
    ```
    {
        "version": "0.2.0",
        "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "debug server",
                "program": "${workspaceFolder}/server/index.js"
            }
        ]
    }
    ```
3.  Set a breakpoint in editor
4.  Click on the green run button to start debugging.

# Linting

Linting makes sure that the source code follows the same coding style. It's recommend to run linting
with fix to automatically fix fixable linting issues.

```
npm run fix
```

If you just want to see the issues without automatically fixing, you can run

```
npm run lint
```

# Continous Intergration

This project uses Travis CI as continous intergration service. Travis will pick up our project
whenever we have a new commit, our build will run both `npm test` and `npm run lint`. Either one of
them fail will result in a failed build.

# Recommended Visual Studio Code plugin

If you are using Visual Studio Code, it's recommended to install the following extension:

## eslint (search for `dbaeumer.vscode-eslint`) for linting

This extension displays linting issues in the code. Also recommend turning on
`"eslint.autoFixOnSave": true` in Visual Studio Code workspace settings. This runs `fix` for the
current file when save.
