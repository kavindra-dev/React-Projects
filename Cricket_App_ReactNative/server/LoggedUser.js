const mongoose = require('mongoose')

const UserLogin = new mongoose.Schema({
    username:String,
}) 

mongoose.model("loginUser",UserLogin)