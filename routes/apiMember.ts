import express from "express";
import { PrismaClient } from "@prisma/client";

interface Member {
    id: number,
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    signedUpDate: Date,
    active: boolean
}

const prisma: PrismaClient = new PrismaClient();

export const apiMemberRouter: express.Router = express.Router();

apiMemberRouter.use(express.json());

apiMemberRouter.get("/", async (req: express.Request, res: express.Response) => {
    try {
        let data : Member[] = await prisma.member.findMany();
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

apiMemberRouter.put("/:id", async (req: express.Request, res: express.Response) => {
    try {
        let member : any = await prisma.member.findUnique({
            where: {
                id: Number(req.params.id)
            }
        });

        let updatedMember : Member = {
            id: member.id,
            firstname: req.body.firstname ? req.body.firstname : member.firstname,
            lastname: req.body.lastname ? req.body.lastname : member.lastname,
            email: req.body.email ? req.body.email : member.email,
            phone: req.body.phone ? req.body.phone : member.phone,
            signedUpDate: member.signedUpDate,
            active: req.body.active ? req.body.active : member.active
        };

        await prisma.member.update({
            where: {
                id: Number(req.params.id)
            },
            data: updatedMember
        })
        res.json(await prisma.member.findMany());
    } catch (e : any) {
        console.log(e)
    }
});

apiMemberRouter.delete("/:id", async (req: express.Request, res: express.Response) => {
    try {
        await prisma.member.delete({
            where: {
                id: Number(req.params.id)
            }
        });
        res.json(await prisma.member.findMany());
    } catch (e : any) {
        console.log(e)
    }
});