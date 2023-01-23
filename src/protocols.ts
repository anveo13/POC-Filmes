export type ListFilms = {
    genre: string,
    count: string | number,
}

export type FilmsWatched = {
    filmId: string, 
    userId:string, 
    status: boolean,
    nota:( string | number), 
    
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