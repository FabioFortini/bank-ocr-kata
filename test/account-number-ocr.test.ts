import {describe, expect, it} from "vitest";
import {AccountNumberOCR} from "../src/account-number-ocr";

describe('Account number ocr', () => {
    it.skip('read account numbers', () => {
        const input = `
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
                           
    _  _     _  _  _  _  _ 
  | _| _||_||_ |_   || ||_|
  ||_  _|  | _||_|  ||_| _|
                           
`
        const cleanInput = input.substring(1, input.length - 1)
        const ocr = new AccountNumberOCR()

        const parsedInput = ocr.parse(cleanInput)

        expect(parsedInput).toStrictEqual(["123456789", "123456709"])
    })
})