import express from "express";

const app: express.Application = express();

const port: number = Number(process.env.PORT) || 3101;

app.listen(port, () => {
    console.log(`Server started and is listening on port : ${port}`)
});