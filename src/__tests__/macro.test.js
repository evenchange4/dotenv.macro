import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

expect.addSnapshotSerializer({
  print(val) {
    return val.replace(/..\/macro/, 'dotenv.macro');
  },
  test(val) {
    return typeof val === 'string';
  },
});

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: {
    filename: __filename,
  },
  tests: {
    '[import] all': {
      error: false,
      code: `
        import env from '../macro';
        console.log(env);
      `,
    },
    '[import] inline the value': {
      error: false,
      code: `
        import env from '../macro';
        console.log(env.PORT);
      `,
    },
    '[import] destructure with single value': {
      error: false,
      code: `
        import { PORT } from '../macro';
        console.log(PORT);
      `,
    },
    '[import] destructure with multiple values': {
      error: false,
      code: `
        import { PORT, HOST } from '../macro';
        console.log(PORT);
        console.log(HOST);
      `,
    },
    '[require] all': {
      error: false,
      code: `
        const env = require('../macro');
        console.log(env);
      `,
    },
    '[require] inline the value': {
      error: false,
      code: `
        const env = require('../macro');
        console.log(env.PORT);
      `,
    },
    '[require] destructure with single value': {
      error: false,
      code: `
        const { PORT } = require('../macro');
        console.log(PORT);
      `,
    },
    '[require] destructure with multiple values': {
      error: false,
      code: `
        const { PORT, HOST } = require('../macro');
        console.log(PORT);
        console.log(HOST);
      `,
    },
    '[require] NODE_ENV from CLI': {
      error: false,
      code: `
        const { NODE_ENV } = require('../macro');
        console.log(NODE_ENV);
      `,
    },
  },
});
