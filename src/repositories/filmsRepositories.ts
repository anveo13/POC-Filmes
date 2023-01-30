import prisma from "../database/db.js";

async function insertedFilm(name: string, genre: string, platform: string) {
    const createFilm = await prisma.films.create({
        data: {
            name,
            genre,
            platform
        }
    })
};

async function repeatedMovie(name: string) {
    const film = await prisma.films.findFirst({
        where: {
            name: name
        }
    })
    return film
}

async function getFilm() {
    return await prisma.films.findMany()
};

async function getFilmId(id: number) {
    return prisma.films.findFirst({ where: { id } })
};

async function deletedMovie(id: number) {
    return prisma.films.delete({ where: { id } });
}


const filmsRepository = {
    insertedFilm, deletedMovie, repeatedMovie, getFilm, getFilmId
}

export default filmsRepository;

