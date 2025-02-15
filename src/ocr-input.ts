import { Entry } from "./entry";

export class OCRInput {
  input: string;

  constructor(input: string) {
    this.input = input;
  }

  extractEntries(): Entry[] {
    const entries: Entry[] = [];

    const inputLines = this.convertToLinesArray()

    const totalLinesForSingleEntry = 4
    for (let i = 0; i < inputLines.length; i += totalLinesForSingleEntry) {
      const entryContent = inputLines.slice(i, i + totalLinesForSingleEntry)
      entries.push(Entry.of(entryContent))
    }

    return entries;
  }

  private convertToLinesArray() {
    return this.input.split("\n").filter(line => line !== "");
  }
}