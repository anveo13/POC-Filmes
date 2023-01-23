import {Request, Response} from "express";
import { deletedMovie, insertedFilm, listFilmsBygender, listFilmsByPlatform } from "../repositories/filmsRepositories.js"
import { Films } from "../protocols.js";
import connection from "../database/db.js";

const postFilm = async (req: Request, res: Response) =>{
    const {name, genre, platform }= req.body as Films;

    const findName = await connection.query(`SELECT name FROM films WHERE name=$1`, [name]);
        if (findName.rowCount) return res.status(409).send("Filme já cadastrado")

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

    const searchByPlatform = async (req: Request, res: Response)=>{

        const platform: string = req.params.platform;
        
        try {
    
            const result = await listFilmsByPlatform(platform)
            res.send(result.rows[0]);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
        }
    
        const searchByGenre = async (req: Request, res: Response)=>{
    
            const genre: string = req.params.genre;
            
            try {
                const result = await listFilmsBygender(genre)
                res.send(result.rows[0]);
            } catch (error) {
                console.log(error);
                res.sendStatus(500);
            }
            }

export {postFilm, deleteFilme, searchByPlatform, searchByGenre}