import { NextFunction, Request, Response } from "express";
import { Films } from "../protocols.js";
import { filmSchema } from "../schemas/filmSchema.js";

export async function filmsValidate(req: Request, res: Response, next: NextFunction) {
    const {name, genre, platform }= req.body as Films;

    const {error} = filmSchema.validate(req.body);
    if(error){
        return res.status(400).send(
            "Todos os campos obrigatorios"
        )
    }
    next()
}