const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())
var nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({
    port:465,
    host:"gandhiraseshk30@gmail.com",
    auth:{
        user:'',
        pass:'ymxwydosybjyopul',
        
    },
    secure:true,
})

server.listen(process.env.PORT || 3030);