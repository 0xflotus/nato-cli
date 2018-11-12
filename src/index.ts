import { Alphabet } from './dictionary'

process.argv.slice(2).forEach((val: string, index: number) => {
  val.split('').forEach((letter: string) => {
    if (!/[a-zA-Z0-9]/.test(letter)) {
      throw new Error(`No text for letter '${letter}'`)
    } 
    console.log(Alphabet.get(letter.toLowerCase()))
  });
});