import { describe, expect, it } from "vitest";
import { OCRInput } from "../src/ocr-input";
import { Entry } from "../src/entry";

describe('OCR input', () => {
  it('extracts a list of entries', () => {

    const input = `
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   || ||_|
  ||_  _|  | _||_|  ||_| _|
                           
`

    const ocrInput = new OCRInput(input)
    const expectedEntries = [Entry.of(`
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
`), Entry.of(`
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
`)]
    expect(ocrInput.extractEntries()).toStrictEqual(expectedEntries)
  })
});