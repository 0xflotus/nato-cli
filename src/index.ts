const nato = require("nato")

process.argv.slice(2).forEach((val: string, index: number) => {
  console.log(
    new nato(val.toLowerCase()).natified.map((e: ILetter) => e.text).join(" ")
  )
})
