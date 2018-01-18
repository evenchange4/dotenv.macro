# dotenv.macro

> Inline dotenv at build-time with babel-macros.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]
[![node][node]]()

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devdependency-badge]][devdependency]
[![peerDependency Status][peerdependency-badge]][peerdependency]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```sh
$ yarn add dotenv.macro
```

> Note: You'll also need to install and configure [babel-plugin-macros](https://github.com/kentcdodds/babel-plugin-macros) if you haven't already.

## Usage

```js
// .env
PORT=3001
HOST=localhost

// index.js
import { PORT, HOST } from 'dotenv.macro';
console.log(PORT);
console.log(HOST);

      ↓ ↓ ↓ ↓ ↓ ↓

console.log(process && process.env && process.env.PORT || "3001");
console.log(process && process.env && process.env.HOST || "localhost");
```

## Alternative

* [babel-plugin-inline-dotenv](https://github.com/brysgo/babel-plugin-inline-dotenv)

## Development

### Requirements

* node >= 9.4.0
* yarn >= 1.3.2

```sh
$ yarn install --pure-lockfile
```

## Test

```sh
$ yarn run format
$ yarn run eslint
$ yarn run test:watch
$ yarn run build
```

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/evenchange4/dotenv.macro/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/dotenv.macro
[npm-badge]: https://img.shields.io/npm/v/dotenv.macro.svg?style=flat-square
[npm]: https://www.npmjs.org/package/dotenv.macro
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/dotenv.macro.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/dotenv.macro?branch=master
[node]: https://img.shields.io/node/v/dotenv.macro.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dt/dotenv.macro.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/dotenv.macro.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[dependency-badge]: https://david-dm.org/evenchange4/dotenv.macro.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/dotenv.macro
[devdependency-badge]: https://david-dm.org/evenchange4/dotenv.macro/dev-status.svg?style=flat-square
[devdependency]: https://david-dm.org/evenchange4/dotenv.macro#info=devDependencies
[peerdependency-badge]: https://david-dm.org/evenchange4/dotenv.macro/peer-status.svg?style=flat-square
[peerdependency]: https://david-dm.org/evenchange4/dotenv.macro#info=peerDependencies
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
