import { Request, Response } from "express";
import { Films } from "../protocols.js";
import filmsService from "../services/filmsService.js";

const postFilm = async (req: Request, res: Response) => {
    const { name, genre, platform } = req.body as Films;
    try {
        await filmsService.postFilm(name, genre, platform)
        res.status(200).send("inserted movie!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const deleteFilme = async (req: Request, res: Response) => {
    const filmId = parseInt(req.params.filmId);

    try {
        await filmsService.deletedMovie(filmId);
        res.status(200).send("deleted movie!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const getFilm = async (req: Request, res: Response) => {
    try{
        const films = await filmsService.getFilm();
        res.send(films)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const getFilmId = async (req: Request, res: Response) => {
    const filmId = parseInt(req.params.filmId);
    try{
        const films = await filmsService.getFilmId(filmId);
        res.send(films)
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
export { postFilm, deleteFilme, getFilm, getFilmId }