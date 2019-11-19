# Cypress Env Plugin

An unofficial plugin for loading your environment into your Cypress environment, such as dotenv.

## Installation

**npm**

```bash
npm i -D cypress-env-plugin
```

**yarn**

```bash
yarn add -D cypress-env-plugin
```

## Usage

In your `cypress/plugins/index.js` file:

### Basic example

```js
const { createEnvPlugin } = require('cypress-env-plugin');
/**
 * With no prefix a .env of:
 * SECRET_KEY=SECRET_KEY
 * CYPRESS_API_URL=https://api.cool.com/api/
 *
 * Will expose to Cypress Env:
 * API_URL=https://api.cool.com/api/
 */
// Initialise the plugin
const envPlugin = createEnvPlugin({
  env: require('dotenv').config(),
});

module.exports = (on, config) => {
  // Add the plugin
  envPlugin(config);
  return config;
};
```

### Remove prefix restriction example

By default, we filter out any environment variables unless they're prefixed with `CYPRESS_`, if you want to load everything from your `.env` you can pass `null` to the prefix property,

```js
const { createEnvPlugin } = require('cypress-env-plugin');
/**
 * With a null prefix a .env of:
 * SECRET_KEY=SECRET_KEY
 * CYPRESS_API_URL=https://api.cool.com/api/
 *
 * Will expose to Cypress Env:
 * SECRET_KEY=SECRET_KEY
 * CYPRESS_API_URL=https://api.cool.com/api/
 */
// Initialise the plugin
const envPlugin = createEnvPlugin({
  env: require('dotenv').config(),
});

module.exports = (on, config) => {
  // Add the plugin
  envPlugin(config);
  return config;
};
```

### Custom prefix example

You can also provide your own prefix:

```js
const withCustomPrefix = createEnvPlugin({
  prefix: 'WHATEVER_',
  env: require('dotenv').config(),
});
```

### Plain object example

I'm not sure why, but you can also pass a plain object for your environment. `process.env` maybe?

```js
const withCustomPrefix = createEnvPlugin({
  prefix: 'WHATEVER_',
  env: {
    WHATEVER_API_KEY: '123578123718923',
  },
});
```

## Contributing

### Local Development

Below is a list of commands you will probably find useful.

#### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes.

#### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

#### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
