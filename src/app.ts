import express from "express";
import cors from "cors";
/* import router from './router/index' */


const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}...`)
);
