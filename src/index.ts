import { dict1 } from "./dictionary"
const pjson = require("pjson")
const osLocale = require("os-locale")

if (["-v", "--version", "version"].indexOf(process.argv[2]) > -1) {
  console.log(pjson.version)
} else {
  process.argv.slice(2).forEach((val: string) => {
    console.log(
      /[^a-zA-Z]/.test(val)
        ? `${
            osLocale.sync() === "de_DE"
              ? "Es gibt nicht unterstuetzte Zeichen in"
              : "There are not supported characters in"
          } '${val}'`
        : val
            .split("")
            .map((e: string) => dict1.get(e.toLowerCase())![0])
            .join(" ")
    )
  })
}
