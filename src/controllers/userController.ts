import { Request, Response } from "express";
import connection from "../database/db.js";
import { FilmsWatched } from "../protocols.js";
import { insertedUser, insertedWatchedFilm } from "../repositories/userRepositories.js"

const postUser = async (req: Request, res: Response) => {
    const name: string = req.body.name;

    try {
        await insertedUser(name)
        res.status(200).send("inserted user");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

const filmWatched = async (req: Request, res: Response) => {
    const { filmId, userId, nota, status } = req.body as FilmsWatched;

    try {

        const filmExist = await connection.query(`SELECT * FROM films WHERE id = $1;`, [filmId]);
        if (filmExist.rowCount === 0) {
            return res.status(409).send("Movie not found")
        }

        await insertedWatchedFilm(filmId, userId, nota, status)
        res.status(200).send("inserted movie watched");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export { postUser, filmWatched }
