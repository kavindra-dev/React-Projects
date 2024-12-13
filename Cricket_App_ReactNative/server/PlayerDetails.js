const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
	pname:String, 
    page:String, 
   	pteam:String, 
  	pmatches:String, 
    ptype:String, 
    pfifty:String, 
    phundres:String, 
    pcatches:String, 
    pstrikerate:String
}) 

mongoose.model("playerData",PlayerSchema)