import { describe, it, expect, vi } from "vitest";

import { add } from "../src/utils/test-utils";


function logToX(x) {
    x.log("Foobar!");
}

describe("logToX", () => {
    it("should print to terminal using `x`", () => {
        const testInterface = {
            log: vi.fn()
        };

        logToX(testInterface);

        expect(testInterface.log).toHaveBeenCalledWith("Foobar!");
    });
});


describe("Addition by utility function", () => {
    it("should add two numbers together", () => {
        const x = 10;
        const y = 4;

        const result = add(x, y);

        expect(result).toBe(14);
    });

    it("should not substract two numbers", () => {
        const x = 10;
        const y = 14;

        const result = add(x, y);

        expect(result).toBe(24);
    });
});


// Legg til tester som bekrefter funksjonalitet for "stringReverse"-funksjonen.
