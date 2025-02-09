export class Entry {

    private lines: string[] = [];

    constructor(singleLineInput: string) {
        this.lines = singleLineInput.split('\n')
    }

    static of(input: string) {
        return new Entry(input);
    }

    toAccountNumber(): any {
      throw new Error("Method not implemented.");
    }

    equals(other: Entry): boolean {
        if (this.lines.length !== other.lines.length) {
            return false;
        }
        for (let i = 0; i < this.lines.length; i++) {
            if (this.lines[i] !== other.lines[i]) {
                return false;
            }
        }
        return true;
    }
}