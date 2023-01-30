import { Router } from "express";
import {  getUser, postUser } from "../controllers/userController.js";


const userRouter = Router();

userRouter.post("/user", postUser);
userRouter.get("/user", getUser)

export default userRouter;