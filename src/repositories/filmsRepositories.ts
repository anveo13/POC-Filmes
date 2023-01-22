import connection from "../database/db.js";

async function insertedFilm (name: string, genre: string, platform:string){

    await connection.query(`INSERT INTO films (name, genre, platform) 
    VALUES ($1, $2, $3);`, 
    [name, genre, platform]);

}

export {insertedFilm}