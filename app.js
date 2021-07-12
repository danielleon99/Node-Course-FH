
const { createFile } = require('./helpers/multiply');
console.clear();

const base = 10;

createFile(base)
  .then( res => console.log(res))
  .catch( err => console.log(err))