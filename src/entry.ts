import { OCRNumber } from "./ocr-number";

export class Entry {
  private entryLines: string[] = [];

  constructor(entryLines: string[]) {
    this.entryLines = entryLines
  }

  static of(entryLines: string[]) {
    return new Entry(entryLines);
  }

  toAccountNumber(): string {
    const linesWithSymbols = this.extractLinesWithSymbols()
    let accountNumber = ""
    let offset = 0
    const singleNumberLength = 3
    const totNumbersOnSingleLine = 9;

    for (let index = 0; index < totNumbersOnSingleLine; index++) {
      const currentNumber = linesWithSymbols.map(line => {
        return line.substring(offset, offset + singleNumberLength)
      })
      accountNumber += OCRNumber.from(currentNumber).toNumber()

      offset += singleNumberLength
    }

    return accountNumber
  }

  private extractLinesWithSymbols() {
    return this.entryLines.slice(0, 3);
  }

  equals(other: Entry): boolean {
    if (this.entryLines.length !== other.entryLines.length) {
      return false;
    }
    for (let i = 0; i < this.entryLines.length; i++) {
      if (this.entryLines[i] !== other.entryLines[i]) {
        return false;
      }
    }
    return true;
  }
}