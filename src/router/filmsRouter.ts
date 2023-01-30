import { Router } from "express";
import { deleteFilme, getFilm, getFilmId, postFilm } from "../controllers/filmsController.js";
import { filmsValidate } from "../middlewares/filmsMiddleware.js";



const filmsRouter = Router();

filmsRouter.post("/film", filmsValidate, postFilm);
filmsRouter.delete("/deleteFilm/:filmId", deleteFilme);
filmsRouter.get("/film/", getFilm);
filmsRouter.get("/film/:filmId", getFilmId);

export { filmsRouter };

