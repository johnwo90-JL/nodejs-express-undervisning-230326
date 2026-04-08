import express, { json } from "express";

import { useRequestId } from "./middleware/request-id.middleware.js";
import { useLogging } from "./middleware/request-logger.middleware.js";
import { serverConfig } from "./configs/server.config.js";
import { rootRouter } from "./routers/root.router.js";
import { userRouter } from "./routers/users.router.js";

export const app = express();

app.use(json({ limit: "100kb" }));

app.use(useRequestId);
app.use(useLogging)

app.use("/", rootRouter);
app.use("/users", userRouter);

app.use((err, req, res, next)  =>  {
     res.status(500).send("Reached app.js"); // Bad Request
});


const { port, host } = serverConfig;

app.listen(port, host, (error) => {
    if (error?.name) {
        console.error("Encountered error:", JSON.stringify(error, null, 4));
        process.exit();
    }

    console.log(`Server up and running @ ${host}:${port}`);
});