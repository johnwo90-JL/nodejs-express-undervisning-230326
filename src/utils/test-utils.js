import fs from "node:fs";

export const CSV_EOL = "\r\n";
export const CSV_HEADER = "id,name,email,password,username";


export function add(x, y) {
    return x + y;
}


export function readCSV(path, entriesKey = null) {
    const content = fs.existsSync(path) ? fs.readFileSync(path, "utf8") : CSV_HEADER+CSV_EOL
    const lines = content.split(/\r?\n/);
    const header = lines.shift() ?? "";
    const entries = lines;

    return { header, [entriesKey ?? "entries"]: entries.filter(e => e.length) };
}


export function appendCSV(path, entries) {
    if (!entries ||
        !Array.isArray(entries)) {
        throw new Error("Invalid argument to parameter \"entries\".");
    }

    if (entries.length === 0) {
        return;
    }

    const currentContent = fs.readFileSync(path, "utf8");
    const needsRecordSeparator = currentContent.length > 0 && !currentContent.endsWith("\n");
    const contentToAppend = `${needsRecordSeparator ? CSV_EOL : ""}${entries.join(CSV_EOL)}${CSV_EOL}`;

    fs.appendFileSync(path, contentToAppend, "utf8");
}


export function writeCSV(path, entries) {
    if (!entries || !Array.isArray(entries)) {
        throw new Error("Invalid argument to parameter \"entries\".");
    }

    const data = readCSV(path);
    const body = entries.length ? `${entries.join(CSV_EOL)}${CSV_EOL}` : "";

    fs.writeFileSync(path, `${data.header ?? CSV_HEADER}${CSV_EOL}${body}`, "utf8");
}

export function deleteCSV(path) {
    fs.unlinkSync(path);
}