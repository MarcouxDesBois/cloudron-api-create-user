const express = require("express")
const router = express.Router()

const usersService = require("../services/users")
const mailbox = require("../services/mailbox")

router.post('', async (req, res) => {
    let result = await usersService.createUser(req.body)

    res.send({result})
})

module.exports = router