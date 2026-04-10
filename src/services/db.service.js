

export function databaseService(adapter) {
    return {
        getAll() {
            return adapter.getAll();
        },
        create(entry) {
            console.log("[DB-service]",entry);
            adapter.create(entry);
        }
    }
}