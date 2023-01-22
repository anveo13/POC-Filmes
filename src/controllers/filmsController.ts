
import {Request, Response} from "express";
import { deletedMovie, insertedFilm } from "../repositories/filmsRepositories.js"
import { filmSchema } from "../schemas/filmSchema.js"
import { Films } from "../protocols.js";

const postFilm = async (req: Request, res: Response) =>{
    const {name, genre, platform }= req.body as Films;

    const {error} = filmSchema.validate(req.body);
    if(error){
        return res.status(400).send({
            message: error.message
        })
    }

try {
    await insertedFilm(name, genre, platform)
    res.status(200).send("inserted movie!");
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
}

const deleteFilme = async (req:Request, res: Response)=>{
    const filmId = req.params.filmId;

    try {
    await deletedMovie(filmId);
    res.status(200).send("deleted movie!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    }

export {postFilm, deleteFilme}