import { Films } from "../protocols";
import { deletedMovie, insertedFilm, listFilmsByPlatform } from "../repositories/filmsRepositories.js";
import { erros } from "../erros.js";
import connection from "../database/db.js";
import { Response } from "express";

async function postFilm(film: Films, res: Response) {
    const { name, genre, platform } = film;

    const findName = await connection.query(`SELECT name FROM films WHERE name=$1`, [name]);
    if (findName.rowCount) 
    return res.status(409).send("film already registered") 

    try {
        await insertedFilm(name, genre, platform)
    } catch (error) {
        console.error(error);
        throw erros();
    }
}

async function deleteFilme(filmId: string) {
    try {
        await deletedMovie(filmId);

    } catch (error) {
        console.error(error);
        throw erros();
    }
}

async function searchByPlatform(plataform: string) {
    try {
        const films =  await listFilmsByPlatform(plataform)
        return films
    } catch (error) {
        console.error(error);
        throw erros();
    }
}


const services = {
    postFilm,
    deleteFilme,
    searchByPlatform,
}

export default services;