import { describe, expect, it } from "vitest";
import { Entry } from "../src/entry";
import { OCRInput } from "../src/ocr-input";

describe('OCR input', () => {
  it('extracts a list of entries', () => {
    const input =
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   ||_||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n" +
      "                           \n" +
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   || ||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n" +
      "                           \n"

    const ocrInput = new OCRInput(input)
    const expectedEntries = [Entry.of([
      "    _  _     _  _  _  _  _ ",
      "  | _| _||_||_ |_   ||_||_|",
      "  ||_  _|  | _||_|  ||_| _|",
      "                           "
    ]
    ), Entry.of([
      "    _  _     _  _  _  _  _ ",
      "  | _| _||_||_ |_   || ||_|",
      "  ||_  _|  | _||_|  ||_| _|",
      "                           "
    ]
    )]
    expect(ocrInput.extractEntries()).toStrictEqual(expectedEntries)
  })
});
