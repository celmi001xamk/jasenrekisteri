import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma: PrismaClient = new PrismaClient();

export const apiMemberRouter: express.Router = express.Router();

apiMemberRouter.use(express.json());

apiMemberRouter.get("/", async (req: express.Request, res: express.Response) => {
    try {
        let data = await prisma.member.findMany();
        res.json(data);
    } catch (e: any) {
        console.log(e);
    }
});

apiMemberRouter.post("/", async (req: express.Request, res: express.Response) => {
    try {
        await prisma.member.create({
            data: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                phone: req.body.phone,
                active: req.body.active
            }
        });
        res.json(await prisma.member.findMany());
    } catch (e : any) {
        console.log(e)
    }
});
