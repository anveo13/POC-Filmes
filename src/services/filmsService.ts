import filmsRepository from "../repositories/filmsRepositories.js";

async function postFilm (name: string, genre: string, plataform: string) {
    const film = await filmsRepository.repeatedMovie(name) 
 
    if (film) {
     throw (`film already registered.`)
   }
    
   const newfilm = await filmsRepository.insertedFilm(name, genre, plataform)
    return newfilm
 }

async function getFilm() {
    const film = await filmsRepository.getFilm();
    return film;
};

async function getFilmId(id: number) {
    const film = await filmsRepository.getFilmId(id);
    if (!film) {
      throw ("Film not found");
    }
    return film;
};

async function deletedMovie(id: number) {
    const film = await filmsRepository.deletedMovie(id);
    return film;
}

const filmsService = {
    getFilm,
    getFilmId,
    postFilm,
    deletedMovie,
}

export default filmsService