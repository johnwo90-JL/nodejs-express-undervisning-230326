import express from "express";


const app = express();

/**
 * @param {express.Request} req - HTTP Request
 * @param {express.Response} res - HTTP Response
 * @param {express.NextFunction} [next] - Invoke next handler
 */
const endpointHandler = (req, res, next) => { // <-- Request Handler
    res.status(200).send("Hello, World!"); // 200 -> OK
    console.log(JSON.stringify(req.rawHeaders));
};

app.get("/", endpointHandler);

const port = 3000;
const host = "127.0.0.1"; // 127.0.0.1 <=> localhost

app.listen(port, host, (error) => {
    if (error?.name) {
        console.error("Encountered error:", JSON.stringify(error, null, 4));
        process.exit();
    }

    console.log(`Server up and running @ ${host}:${port}`);
});