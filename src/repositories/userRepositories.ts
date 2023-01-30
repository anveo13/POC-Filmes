import prisma from "../database/db.js";

async function insertedUser(name: string) {
    return prisma.users.create({
        data: {
            name
        }
    }
    )
};

async function getUsers() {
    return await prisma.users.findMany()
};

const userRepository = {
    insertedUser,
    getUsers
}

export default userRepository