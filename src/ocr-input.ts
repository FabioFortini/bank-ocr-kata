import { Entry } from "./entry";

export class OCRInput {
    input: string;

    constructor(input: string) {
        this.input = input;
    }

    extractEntries(): Entry[] {
        // TODO use JS standard library (map etc.) for the following code
        const entries: Entry[] = [];

        let offset = 0

        do {
            const increment = (4 * 28) + 1
            const entryContent = this.input.substring(0, increment)
            entries.push(Entry.of(entryContent))

            offset += increment
        } while (offset < (this.input.length - 1))

        return entries;
    }
}