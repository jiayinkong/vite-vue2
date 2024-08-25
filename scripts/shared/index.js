
const path = require('path');
const childProcess = require('child_process');

const filePathMap = {
  'compoents': path.resolve(process.cwd(), 'packages/components'),
  'docs': path.resolve(process.cwd(), 'packages/docs'),
};

module.exports = {
  filePathMap,
  childProcess,
};