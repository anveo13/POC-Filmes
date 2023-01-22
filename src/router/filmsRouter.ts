import { Router } from "express";
import { deleteFilme, postFilm, searchByGenre, searchByPlatform } from "../controllers/filmsController.js";



const filmsRouter = Router();

filmsRouter.post("/film", postFilm);
filmsRouter.delete("/deleteFilm/:filmId", deleteFilme);
filmsRouter.get("/filmByPlatform/:platform", searchByPlatform);
filmsRouter.get("/filmByGender/:genre", searchByGenre); 
export { filmsRouter };

