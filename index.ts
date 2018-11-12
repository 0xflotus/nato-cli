const Nato = require('nato');

process.argv.slice(2).forEach((val, index) => {
  console.log(new Nato(val.toLowerCase()).natified.map(e => e.text).join(' '));
});
