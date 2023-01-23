import express from "express";
import cors from "cors";
import {filmsRouter} from "./router/filmsRouter.js";
import userRouter from "./router/userRouter.js";


const server = express();
server.use(cors());
server.use(express.json());
server.use( filmsRouter, userRouter)

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`)
);
