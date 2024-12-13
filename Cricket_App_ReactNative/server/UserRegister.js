const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	fname:String,  
    username:String,  
    userpass:String,
    phno:String
}) 

mongoose.model("mainUser",UserSchema)