require('dotenv').config();
const express = require('express')
const app = express()
const PORT = 3001

const userRoute = require('./routes/users')

let path = __dirname + '/views/';

app.use(express.json())

app.use('/api/user', userRoute)

app.get("/",function(req,res){
    res.sendFile(path + "index.html");
});

app.listen(PORT, () => {
    console.log(`Server listening on port : ${PORT}`)
})