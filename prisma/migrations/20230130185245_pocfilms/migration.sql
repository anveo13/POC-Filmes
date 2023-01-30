-- CreateTable
CREATE TABLE "filmUser" (
    "id" SERIAL NOT NULL,
    "filmId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "nota" TEXT,

    CONSTRAINT "filmUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "films" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "genre" VARCHAR(100) NOT NULL,
    "platform" VARCHAR(100) NOT NULL,

    CONSTRAINT "films_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(300) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "filmUser" ADD CONSTRAINT "filmUser_filmId_fkey" FOREIGN KEY ("filmId") REFERENCES "films"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "filmUser" ADD CONSTRAINT "filmUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
