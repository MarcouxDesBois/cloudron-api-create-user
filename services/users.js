const config = process.env;
const User = require("../models/user")
const axios = require("axios")
const {configMailboxe} = require("./mailbox");

const headers = {"Content-Type": "application/json", "Authorization": "Bearer " + config.TOKEN_API}

function createUserFromBody(reqBody) {
    try {
        return new User(null, (reqBody.isVisitor ? reqBody.fallbackEmail : reqBody.email), reqBody.fallbackEmail, reqBody.displayName, reqBody.role, reqBody.username, reqBody.isVisitor)
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

    try {
       userToAdd.id = await createUserOnCloudron(userToAdd)
    } catch (e) {
       return "User can't be created."
    }

    if(!userToAdd.isVisitor){
        await configMailboxe(userToAdd)
    }

    return "User " + userToAdd.username + " created in Cloudron"
}

async function createUserOnCloudron(user){
    try {
        const result = await axios.post(config.CLOUDRON_URL + config.USERS_API, user, {headers})
        return result.data.id
    } catch (e) {
        console.log("Creation of user on cloudron error : " + e.response.data.message)
        console.error(e)
    }
}

async function findUser(username){
    if(username === undefined){
        console.log("Please provide a username.")
    } else {
        try {
            const result = await axios.get(config.CLOUDRON_URL + config.USERS_API, {headers, params: {"search": username}})
            return result.data.users.length > 0
        } catch (e) {
            console.error(e)
        }
    }
}


module.exports = {createUser}