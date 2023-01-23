import { userSchema } from "../schemas/userSchema.js";
import { NextFunction, Request, Response } from "express";
import { FilmsWatched } from "../protocols.js";

export async function usersValidate(req: Request, res: Response, next: NextFunction) {
    const { filmId, userId, nota, status } = req.body as FilmsWatched;
    const {error} = userSchema.validate(req.body);
    if(error){
        return res.status(400).send("Preencha todo os campos")}
        next()
    }