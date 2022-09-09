//server.end() or end() should always be invoked after sending response
//res.writeHead(200"statuscode","content-type":text/html")
/*
//Incase of resources the web page itself needs they have to 
// be declared and used similarily 

const http = require('http')
const {readFileSync} = require('fs')
const cssFile = readFileSynch('./css.css')
const file = readFileSync('./index.html')
const server = http.createServer((req,res)=>{
	res.writeHead(200,{"content-type":"text/html"})
	if(req.url == 'css.css'){
	res.writeHead(200,{content-type:"text/css" })
	res.end(cssFile)
	}
	res.end(file)
})
server.listen(5000)
*/


/*
app.get
app.post
app.post
app.delete
app.all
app.use
app.listen
*/
//END OF ALL THE REQUEST TYPES
/*
const express = require('express')
const app = express()
const path = require('path')
app.use(express.static('./static'))

app.get('/',(req,res)=>{
	//res.sendFile('index.html') works
	res.sendfile(path.join(__dirname,'index.html'))
})
/*
app.get('/about',(req,res)=>{
	res.send("this is about us")
})
*/

/*

app.all("*",(req,res)=>{
	res.status(404).send("<h1>resource not found</h1>")
})

app.listen(5000,()=>{
	console.log("server has started")
})
*/
/*
const express = require('express')
const app= express()
app.get('/',(req,res)=>{
	res.json([{name:'diksthi'},{name:'knd'}])
})
app.get('/user/:id',(req,res)=>{
	const {id} = req.params
	console.log(id)
	
	res.send(`this is a value of ${id}`)
})
app.listen(5000,()=>{
	/*
	const a = [1,2,3,4]
	const newValue = a.map((x)=>{
		return x*2
	})
	console.log(newValue)
	*/
	/*
	console.log("server started")
})

app.get('/users/api/query',(req,res)=>{
	res.send("hello wrold")
	console.log(req.query)
})
//req.params 

*/
/*
const express = require('express')
const app = express()
const logger = require('./logger')
const auth = require('./authorize')
//app.use(logger)
app.use(auth)
// in case of app.use('/something') anything for something will have logger invoked
app.get("/",(req,res)=>{

	res.send("This is the home")
})

app.get("/about",(req,res)=>{
	res.send("This is the about page")
})
app.listen(5000)
*/
const express = require('express')
const app = express()
//const logger = require('./logger')
//app.use('/something',logger) example for line 97
app.use(express.static('./static'))
app.use(express.urlencoded({extended:true}))
app.post('/login',(req,res)=>{
	console.log(req.body)
	res.send(`the name is ${req.body.name}`)
})
app.put("/postman/people/:id",(req,res)=>{
	const {name} = req.body
	const {id} = req.params
	console.log(name)
	console.log(id)
	res.send("sent")
})

const routes = require('./routes/route.js')
app.use('/post',routes)
app.listen(5000)


