import { Request, Response } from "express";
import userService from "../services/userServices.js";

const postUser = async (req: Request, res: Response) => {
    const name: string = req.body.name;

    try {
        await userService.createUser(name)
        res.status(200).send("inserted user");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const getUser = async (req: Request, res: Response) => {
    try {
        const users = await userService.getUser();
        res.send(users)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { postUser, getUser }
