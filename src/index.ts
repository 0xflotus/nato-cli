import { dict1 } from "./dictionary"

process.argv.slice(2).forEach((val: string) => {
  console.log(
    val
      .split("")
      .map((e: string) => dict1.get(e.toLowerCase())![0])
      .join(" ")
  )
})
