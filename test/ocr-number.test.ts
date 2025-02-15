import { describe, expect, it } from "vitest";
import { OCRNumber } from "../src/ocr-number";

describe("OCRNumber", () => {
  // TODO write a parameriterized test for this test suite

  it("returns a number from OCR representation of value 1", () => {
    const ocrRepresentation = [
      "   ",
      "  |",
      "  |"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(1)
  })

  it("returns a number from OCR representation of value 2", () => {
    const ocrRepresentation = [
      " _ ",
      " _|",
      "|_ "
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(2)
  })

  it("returns a number from OCR representation of value 3", () => {
    const ocrRepresentation = [
      " _ ",
      " _|",
      " _|"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(3)
  })

  it("returns a number from OCR representation of value 4", () => {
    const ocrRepresentation = [
      "   ",
      "|_|",
      "  |"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(4)
  })

  it("returns a number from OCR representation of value 5", () => {
    const ocrRepresentation = [
      " _ ",
      "|_ ",
      " _|"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(5)
  })

  it("returns a number from OCR representation of value 6", () => {
    const ocrRepresentation = [
      " _ ",
      "|_ ",
      "|_|"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(6)
  })

  it("returns a number from OCR representation of value 7", () => {
    const ocrRepresentation = [
      " _ ",
      "  |",
      "  |"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(7)
  })

  it("returns a number from OCR representation of value 8", () => {
    const ocrRepresentation = [
      " _ ",
      "|_|",
      "|_|"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(8)
  })

  it("returns a number from OCR representation of value 9", () => {
    const ocrRepresentation = [
      " _ ",
      "|_|",
      " _|"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(9)
  })

  it("returns a number from OCR representation of value 0", () => {
    const ocrRepresentation = [
      " _ ",
      "| |",
      "|_|"
    ]

    const ocrNumber = OCRNumber.from(ocrRepresentation)

    expect(ocrNumber.toNumber()).to.equal(0)
  })
})
