const Nato = require('nato')

interface Letter {
    text: string,
    pronunciation: string
}

process.argv.slice(2).forEach((val: string, index: number) => {
  console.log(new Nato(val.toLowerCase()).natified.map((e: Letter) => e.text).join(' '));
});