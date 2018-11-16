import { dict1 } from "./dictionary"
import { version } from "../package.json"
import { version as vOptions } from "./options"
import chalk from "chalk"
const osLocale = require("os-locale")

if (vOptions.indexOf(process.argv[2]) > -1) {
  console.log(version)
} else {
  process.argv.slice(2).forEach((val: string) => {
    console.log(
      /[^a-zA-Z]/.test(val)
        ? chalk.red.bold(
            `${
              osLocale.sync() === "de_DE"
                ? "Es gibt nicht unterstuetzte Zeichen in"
                : "There are not supported characters in"
            } '${val}'`
          )
        : val
            .split("")
            .map((e: string) => dict1.get(e.toLowerCase())![0])
            .join(" ")
    )
  })
}
