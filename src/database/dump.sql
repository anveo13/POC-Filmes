CREATE TABLE "filmUser" (
    "id" SERIAL PRIMARY KEY,
    "filmId" integer NOT NULL,
    "userId" integer NOT NULL,
    "nota" text,
    "status" boolean NOT NULL
);

CREATE TABLE "films" (
    "id" SERIAL PRIMARY KEY,
    "name" text NOT NULL,
    "genre" VARCHAR (100) NOT NULL,
    "platform" VARCHAR(100) NOT NULL
);

CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (300) NOT NULL
);