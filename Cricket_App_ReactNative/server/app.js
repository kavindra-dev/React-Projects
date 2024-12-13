const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./UserRegister')
require('./LoggedUser')
require('./PlayerDetails')

app.use(bodyParser.json())


//pass= h9vPqU5C6QUUgd7C
//user=whdemo
const UserRegister = mongoose.model("mainUser")
const LoggedUser = mongoose.model("loginUser")
const PlayerData = mongoose.model("playerData")

const mongoUri = "mongodb+srv://whdemo:h9vPqU5C6QUUgd7C@appcluster.1sfzr.mongodb.net/CricketData?retryWrites=true&w=majority"

mongoose.connect(mongoUri,{
	useNewUrlParser:true,
	useUnifiedTopology:true,
})

mongoose.connection.on("connected",()=>{
	console.log("connected to mongo yeahhh")
})

mongoose.connection.on("error",(err)=>{
	console.log("error",err)
})

app.get('/',(req,res)=>{
	res.send("welcome to node js")
})

app.get('/checkLogin',(res,req)=>{
    UserRegister.find({}).then(data=>{
        req.send(data)
    }).catch(err=>{
        console.log(err)
    })   
})

app.post('/register-user',(res,req)=>{
	const MainUser = new UserRegister({
		fname:res.body.fname,
		username:res.body.username,  
        userpass:res.body.userpass,
        phno:res.body.phno
	})
	MainUser.save()
	.then(data=>{
		console.log(data)
		req.send(data)
	}).catch(err=>{
		console.log(err)	 
	})
	
})



app.post('/login-user',(res,req)=>{
	const LoginUser = new LoggedUser({
		username:res.body.username
	})
	LoginUser.save()
	.then(data=>{
		console.log(data)
		req.send(data)
	}).catch(err=>{
		console.log(err)	 
	})
	
})

app.post('/logout',(res,req)=>{
    LoginUser.findByIdAndRemove(req.params.id)
    .then(data=>{
        console.log(data)
        req.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.post('/player',(res,req)=>{
	const PlayerD = new PlayerData({
		pname:res.body.pname,
		page:res.body.page,
		pmatches:res.body.pmatches,
		ptype:res.body.ptype,
		pfifty:res.body.pfifty,
		phundres:res.body.phundres,
		pcatches:res.body.pcatches,
		pstrikerate:res.body.pstrikerate
	})
	PlayerD.save()
	.then(data=>{
		console.log(data)
		req.send(data)
	}).catch(err=>{
		console.log(err)	 
	})
	
})

app.get('/loadplayer',(res,req)=>{
    PlayerData.find({}).then(data=>{
        req.send(data)
    }).catch(err=>{
        console.log(err)
    })   
})

app.post('/delete',(res,req)=>{
    PlayerData.findByIdAndRemove(req.params.id)
    .then(data=>{
        console.log(data)
        req.send(data)
    })
    .catch(err=>{
        console.log(err)
    })
})

app.listen(3000,()=>{
	console.log("server running")
})