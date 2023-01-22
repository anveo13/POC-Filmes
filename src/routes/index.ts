import { Router } from "express";
import filmsRouter from "./filmsRouter"
import userRouter from "./userRouter"


const router = Router();

router.use(filmsRouter);
router.use(userRouter);

export default router;