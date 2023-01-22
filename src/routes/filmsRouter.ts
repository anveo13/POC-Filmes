import { Router } from "express";



const filmsRouter = Router();

filmsRouter.post("/postFilm", postFilm);
filmsRouter.delete("/deleteFilm/:filmId", deleteFilme);
filmsRouter.get("/filmByPlatform/:platform", searchByPlatform);
filmsRouter.get("/filmByGender/:genre", searchByGenre); 

export default filmsRouter;