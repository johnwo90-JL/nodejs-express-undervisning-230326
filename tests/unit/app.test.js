import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { app } from "../../src/app.js";
import supertest from "supertest";
import TestAgent from "supertest/lib/agent";

/** @type {TestAgent} */
let superapp = null;

describe("endpoint /", () => {
    beforeAll(() => {
        superapp = supertest(app);
    });

    afterAll(() => {
        superapp = undefined;
    });

    it("should respond with 200", async () => {
        const result = await superapp.get("/").expect(200);
        expect(result.text).toBe("Hello, World!");
    });
});