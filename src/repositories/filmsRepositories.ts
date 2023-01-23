import connection from "../database/db.js";

async function insertedFilm (name: string, genre: string, platform:string){

    await connection.query(`INSERT INTO films (name, genre, platform) 
    VALUES ($1, $2, $3);`, 
    [name, genre, platform]);

}

async function deletedMovie (filmId: string){
    await connection.query(`DELETE FROM films WHERE id=$1;`, [filmId]);

}
async function listFilmsByPlatform(platform: string){
    const result = await connection.query(`SELECT films.platform, COUNT(id) FROM films WHERE platform = $1 group by platform;`, [platform])

    return result;
        
}

async function listFilmsBygender(genre: string) {
    const result = connection.query(`SELECT films.genre, COUNT(id) FROM films WHERE genre = $1 group by genre;`, [genre])
    return result;
}
export {insertedFilm, deletedMovie, listFilmsByPlatform, listFilmsBygender}
