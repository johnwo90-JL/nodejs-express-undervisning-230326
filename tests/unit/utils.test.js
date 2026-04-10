import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { CSV_HEADER, appendCSV, deleteCSV, readCSV, writeCSV } from "../../src/utils/test-utils.js";
import { randomUUID } from "node:crypto";

const csvPath = `src/data/users.tmp${randomUUID()}.scratch.csv`;

describe("Utility functions", () => {
    beforeAll(() => writeCSV(csvPath, []));
    afterAll(() => deleteCSV(csvPath));

    it("should return the correct headers", () => {
        expect(readCSV(csvPath).header).toBe(CSV_HEADER);
    });

    it("should append an entry to the CSV-file", () => {
        expect(() => appendCSV(csvPath, ["someIdHere123,Foo Bar,foo@bar.com,abc123,bruker01"])).not.toThrow();
    });

    it("should write an entry to the CSV-file", () => {
        const data = readCSV(csvPath);
        data.entries.push("someIdHere456,Foo Bar2,foo2@bar.com,cba321,bruker02");
        expect(() => writeCSV(csvPath, data.entries)).not.toThrow();
    });

    it("should remove all elements from the CSV-file", () => {
        expect(() => writeCSV(csvPath, [])).not.toThrow();

        const csvAfterWrite = readCSV(csvPath);
        expect(csvAfterWrite.header).toBe(CSV_HEADER);
        expect(csvAfterWrite.entries.length).toBe(0);
    });
});
