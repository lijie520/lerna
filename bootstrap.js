
const spawn = require('cross-spawn');

spawn(
  'lerna',
  ['bootstrap'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
    },
    cwd: process.cwd(),
  }
);
