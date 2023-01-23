import { Router } from "express";
import { filmWatched, postUser } from "../controllers/userController.js";
import { usersValidate } from "../middlewares/userMiddlewares.js";



const userRouter = Router();

userRouter.post("/user", postUser);
userRouter.post("/watchedFilmUser", usersValidate,filmWatched); 

export default userRouter;