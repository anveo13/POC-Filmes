import userRepository from "../repositories/userRepositories.js"

async function createUser (name: string) {
    const newUser = await userRepository.insertedUser(name)
    return newUser
 }

 async function getUser() {
    const users = await userRepository.getUsers();
    return users;
};

const userService = {
    createUser,
    getUser
}

export default userService