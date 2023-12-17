const config = process.env;
const User = require("../models/user")
const axios = require("axios")
const {configMailboxe} = require("./mailbox");

const headers = {"Content-Type": "application/json", "Authorization": "Bearer " + config.TOKEN_API}

function createUserFromBody(reqBody) {
    try {
        return new User(null, reqBody.email, reqBody.fallbackEmail, reqBody.displayName, reqBody.role, reqBody.username, reqBody.isVisitor)
    } catch (e) {
        console.log("Can't serialize user")
        console.error(e)
    }
}

async function createUser(reqBody) {
    const alreadyExist = await findUser(reqBody.username)
    if(alreadyExist){
        return "User already exist"
    }

    let userToAdd = createUserFromBody(reqBody)
    userToAdd.id = await createUserOnCloudron(userToAdd)


    await configMailboxe(userToAdd)

    return "User " + userToAdd.username + " created in Cloudron"
}

async function createUserOnCloudron(user){
    try {
        const result = await axios.post(config.CLOUDRON_URL + config.USERS_API, user, {headers})
        return result.data.id
    } catch (e) {
        console.error(e)
    }
}

async function findUser(username){
    try {
        const result = await axios.get(config.CLOUDRON_URL + config.USERS_API, {headers, params: {"search": username}})
        return result.data.users.length > 0
    } catch (e) {
        console.error(e)
    }
}


module.exports = {createUser}