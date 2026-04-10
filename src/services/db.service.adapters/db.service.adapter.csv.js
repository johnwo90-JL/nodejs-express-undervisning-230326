
import { readCSV, writeCSV, appendCSV, deleteCSV } from "../../utils/test-utils.js";

const csvPath = "src/data/users.csv";

export const csvDbAdapter = {
    getAll() {
        return readCSV(csvPath).entries;
    },
    create(entry) {
        appendCSV(csvPath, [entry]);
    }
}