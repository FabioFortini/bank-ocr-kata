import { OCRInput } from "./ocr-input"

export class AccountNumberOCR {

  parse(input: string) {
    const ocrInput = new OCRInput(input)

    const entries = ocrInput.extractEntries()
    const result = entries.map(entry => entry.toAccountNumber())
    return result
  }
}