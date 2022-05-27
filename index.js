import express from "express";
import winston from "winston";
import proprietarioRoute from "./routes/proprietario.routes.js"
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./doc.js"


const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({ filename: "base.log" })
    ],
    format: combine(
        label({ label: "base" }),
        timestamp(),
        myFormat
    )
});

const corsOptions = {
    credentials: true,
    origin: '*'
}

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
//app.use(express.static("public"));
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


//public
app.use("/proprietario", proprietarioRoute);
app.use("/animal", proprietarioRoute);

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${arr.message}`)
    res.status(400).send({ error: err.message })
})

app.listen(3001, async() => { logger.info("API Started!"), console.log("API Started!") });