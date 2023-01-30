export type ListFilms = {
    genre: string,
    count: string | number,
}

export type FilmsWatched = {
    filmId: number, 
    userId:number, 
    nota: string, 
    
}

export type Films = {
    name: string,
    genre: string,
    platform: string
}
export type Error = {
    name: string;
    message: string;
}