import { describe, expect, it } from "vitest";
import { Entry } from "../src/entry";

describe('Entry', () => {
  it('returns an account number', () => {
    const entryContent = [
      "    _  _     _  _  _  _  _ ",
      "  | _| _||_||_ |_   ||_||_|",
      "  ||_  _|  | _||_|  ||_| _|",
      "                           "
    ]
    const entry = Entry.of(entryContent)

    expect(entry.toAccountNumber()).to.equal("123456789")
  })
})
