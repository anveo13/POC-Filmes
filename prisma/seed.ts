import prisma from "../src/database/db.js";

async function main() {
    await prisma.films.createMany({
        data: [
            {
                name: "Shazam!", genre: "heroi", platform: "hbomax"
            },
            {
                name: "Batman vs Superman", genre: "heroi", platform: "hbomax"
            },
            {
                name: "Batman", genre: "heroi", platform: "hbomax"
            },
            {
                name: "Enola Holme", genre: "aventura", platform: "netflix"
            },
            {
                name: "Panico", genre: "terror", platform: "netflix"
            }
        ]
    })
}

main()
    .then(() => { console.log("Registro feito com sucesso") })
    .catch(e => {
        console.log(e);
        process.exit(1)
    })
    .finally(async () => { await prisma.$disconnect() }) 