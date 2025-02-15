export class OCRNumber {
  private ocrRepresentation: string[];

  constructor(ocrRepresentation: string[]) {
    this.ocrRepresentation = ocrRepresentation
  }

  static from(ocrRepresentation: string[]) {
    return new OCRNumber(ocrRepresentation)
  }

  toNumber(): number | undefined {
    return this.ocrRepresentationToNumbers.get(this.ocrRepresentation.join("\n"))
  }

  private ocrRepresentationToNumbers: Map<string, number> = new Map([
    [
      [
        "   ",
        "  |",
        "  |"
      ].join("\n"), 1
    ],
    [
      [
        " _ ",
        " _|",
        "|_ "
      ].join("\n"), 2
    ],
    [
      [
        " _ ",
        " _|",
        " _|"
      ].join("\n"), 3
    ],
    [
      [
        "   ",
        "|_|",
        "  |"
      ].join("\n"), 4
    ],
    [
      [
        " _ ",
        "|_ ",
        " _|"
      ].join("\n"), 5
    ],
    [
      [
        " _ ",
        "|_ ",
        "|_|"
      ].join("\n"), 6
    ],
    [
      [
        " _ ",
        "  |",
        "  |"
      ].join("\n"), 7
    ],
    [
      [
        " _ ",
        "|_|",
        "|_|"
      ].join("\n"), 8
    ],
    [
      [
        " _ ",
        "|_|",
        " _|"
      ].join("\n"), 9
    ],
    [
      [
        " _ ",
        "| |",
        "|_|"
      ].join("\n"), 0
    ]
  ])

}