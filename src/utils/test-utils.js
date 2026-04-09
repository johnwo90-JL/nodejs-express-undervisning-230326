import fs from "node:fs";



export function add(x, y) {
    return x + y;
}


export function readCSV(path, entriesKey = null) {
    const content = fs.readFileSync(path).toString();
    const lines = content.split("\r\n"); // \r = CR, \n = LF
    const header = lines.shift();
    const entries = lines;

    return { header, [entriesKey ?? "entries"]: entries };
}


export function appendCSV(path, entries) {
    if (!entries ||
        !Array.isArray(entries) ||
        entries.length === 0) {
        throw new Error("Invalid argument to parameter \"entries\".");
    }

    fs.appendFile(path, entries.join("\r\n"), "utf-8", () => {});
}


export function writeCSV(path, entries) {
    // if (!entries || !Array.isArray(entries)) {
    //     throw new Error("Invalid argument to parameter \"entries\".");
    // }

    const data = readCSV(path);
    console.log(data);

    fs.writeFile(path, data.header+"\r\n"+entries.join("\r\n"), 'utf8', () => {});
}