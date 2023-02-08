import express from "express";
import { apiMemberRouter } from "./routes/apiMember";

const app: express.Application = express();

const port: number = Number(process.env.PORT) || 3101;

app.use("/api/member", apiMemberRouter)

app.listen(port, () => {
    console.log(`Server started and is listening on port : ${port}`)
});