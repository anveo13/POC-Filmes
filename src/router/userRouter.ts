import { Router } from "express";
import { filmWatched, postUser } from "../controllers/userController.js";



const userRouter = Router();

userRouter.post("/user", postUser);
userRouter.post("/watchedFilmUser", filmWatched); 

export default userRouter;