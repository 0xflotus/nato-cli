import { dict1 } from "./dictionary"

process.argv.slice(2).forEach((val: string) => {
  console.log(
    /[^a-zA-Z]/.test(val)
      ? `There are not supported characters in '${val}'`
      : val
          .split("")
          .map((e: string) => dict1.get(e.toLowerCase())![0])
          .join(" ")
  )
})
