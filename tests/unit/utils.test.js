import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { appendCSV, readCSV, writeCSV } from "../../src/utils/test-utils.js";

const csvPath = "src/data/users.csv";

describe("Utility functions", () => {
    // it("should return current working directory", () => {
    //     expect(process.cwd()).toBeDefined();
    // });

    it("should return the correct headers", () => {
        expect(readCSV(csvPath).header).toBe("id,name,email,password,username");
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
    });
});