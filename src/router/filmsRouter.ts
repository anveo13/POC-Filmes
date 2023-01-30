import { Router } from "express";
import { deleteFilme, postFilm } from "../controllers/filmsController.js";
import { filmsValidate } from "../middlewares/filmsMiddleware.js";



const filmsRouter = Router();

filmsRouter.post("/film", filmsValidate, postFilm);
filmsRouter.delete("/deleteFilm/:filmId", deleteFilme);

export { filmsRouter };

