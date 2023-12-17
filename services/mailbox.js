const config = process.env;
const axios = require("axios")
const Mailbox = require("../models/mailbox")

const headers = {"Content-Type": "application/json", "Authorization": "Bearer " + config.TOKEN_API}

async function createMailbox(mailboxToCreate) {
    try {
        return await axios.post(config.CLOUDRON_URL + config.EMAIL_API, mailboxToCreate, {headers})
    } catch (e) {
        console.error(e)
    }
}

async function sendInviteMail(user) {
    try {
        return await axios.post(config.CLOUDRON_URL + config.USERS_API + "/" + user.id + config.INVITE_EMAIL_API,
            {"email": user.fallbackEmail}, {headers})
    } catch (e) {
        console.error(e)
    }
}

async function configMailboxe(user){
    let mailboxToCreate = new Mailbox(user.username, user.id, "user", true, 0, 0)
    await createMailbox(mailboxToCreate)
    await sendInviteMail(user)
}

module.exports = {configMailboxe}