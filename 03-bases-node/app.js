const { createFile } = require('./helpers/multiply');
const argv = require('./config/yargs.js');

console.clear();

createFile(argv.b, argv.s, argv.l)
  .then( file => console.log(file))
  .catch( err => console.log(err))

