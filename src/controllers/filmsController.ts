import { Request, Response } from "express";
import { deletedMovie, insertedFilm, listFilmsBygender, listFilmsByPlatform } from "../repositories/filmsRepositories.js"
import { Films } from "../protocols.js";
import services from "../services/filmsService.js";

async function postFilm (req: Request, res: Response) {
    const film = req.body as Films;
    try{
        await services.postFilm(film, res);
        res.status(200).send("inserted movie!");
        return;
    }catch (err){
        console.error(err);
        res.sendStatus(500);
        return;
    }   
}

async function deleteFilme (req: Request, res: Response){
    const filmId = req.params.filmId;

    try {
        await services.deleteFilme(filmId)
        res.status(200).send("deleted movie!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
async function searchByPlatform (req: Request, res: Response){
    const platform: string = req.params.platform;

    try {
        const result = await services.searchByPlatform(platform)
        res.send(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const searchByGenre = async (req: Request, res: Response) => {
    const genre: string = req.params.genre;

    try {
        const result = await listFilmsBygender(genre)
        res.send(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { postFilm, deleteFilme, searchByPlatform, searchByGenre }

