import { describe, expect, it } from "vitest";
import { AccountNumberOCR } from "../src/account-number-ocr";

describe('Account number ocr', () => {
  it('reads account numbers', () => {
    const input =
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   ||_||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n" +
      "                           \n" +
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   || ||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n" +
      "                           \n"

    const ocr = new AccountNumberOCR()

    const parsedInput = ocr.parse(input)

    expect(parsedInput).toStrictEqual(["123456789", "123456709"])
  })
})
