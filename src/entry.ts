import { OCRNumber } from "./ocr-number";

export class Entry {
  private lines: string[] = [];

  constructor(lines: string[]) {
    this.lines = lines
  }

  static of(input: string[]) {
    return new Entry(input);
  }

  toAccountNumber(): any {
    // TODO refactor
    const numberOne: string[] = []
    const numberTwo: string[] = []
    const numberThree: string[] = []
    const numberFour: string[] = []
    const numberFive: string[] = []
    const numberSix: string[] = []
    const numberSeven: string[] = []
    const numberEight: string[] = []
    const numberNine: string[] = []


    this.lines.slice(0, 3).forEach(line => {
      numberOne.push(line.substring(0, 3))
      numberTwo.push(line.substring(3, 6))
      numberThree.push(line.substring(6, 9))
      numberFour.push(line.substring(9, 12))
      numberFive.push(line.substring(12, 15))
      numberSix.push(line.substring(15, 18))
      numberSeven.push(line.substring(18, 21))
      numberEight.push(line.substring(21, 24))
      numberNine.push(line.substring(24, 27))
    })
    const first = OCRNumber.from(numberOne)
    const second = OCRNumber.from(numberTwo)
    const third = OCRNumber.from(numberThree)
    const fourth = OCRNumber.from(numberFour)
    const fifth = OCRNumber.from(numberFive)
    const sixth = OCRNumber.from(numberSix)
    const seventh = OCRNumber.from(numberSeven)
    const eight = OCRNumber.from(numberEight)
    const ninth = OCRNumber.from(numberNine)

    const accountNumber = `${first.toNumber()}${second.toNumber()}${third.toNumber()}${fourth.toNumber()}${fifth.toNumber()}${sixth.toNumber()}${seventh.toNumber()}${eight.toNumber()}${ninth.toNumber()}`;
    return accountNumber
  }

  equals(other: Entry): boolean {
    if (this.lines.length !== other.lines.length) {
      return false;
    }
    for (let i = 0; i < this.lines.length; i++) {
      if (this.lines[i] !== other.lines[i]) {
        return false;
      }
    }
    return true;
  }
}