# node-new-stuff

A simple API to test new features in Node.js

## Enviroment Variables

Node.js allows to load enviroment variables without the need of external dependencies from the command line using `--env-file=` and the file name.

The command allow multiple env files.
For example: `--env-file=.env --env-file=.env.development` loads the variables from `.env` and `.env.development`.
If a variable with the same name is found in both files the last one has more hierarchy .

> The env variables files are pushed to the repository for testing purposes.

## Watch Mode

The watch mode is used in development to prevent the server from stopping with files changes.
This functionality replaces the dependency Nodemon.

The command line for watch mode is `--watch`.
The default behavior clean the terminal after changes.
The command to keep the changes on screen: `--watch-preserve-output`.

`--watch` looks for any change from the entry point (`src/server.js`).
The command line for a specific (or multiple) path is `--watch-path=` followed by the folder to watch (`.src`).
