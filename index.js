require('dotenv').config();
const express = require('express')
const app = express()
const PORT = 3001

const userRoute = require('./routes/users')

app.use(express.json())

app.use('/api/user', userRoute)

app.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`)
})