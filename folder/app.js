/*
const {readFile,writeFile} = require('fs')
//writeFile("text.txt","hello this",(err,result)=>console.log('nothing'))
const getText = (path)=>{
	return new Promise((resolve,reject)=>{
		readFile(path,'utf8',(err,result)=>{
			if(err){
				reject(err)
			}else{
				resolve(result)
			}
		})
	})
}

getText('./text.txt')
.then((res)=>console.log(res))

let something = new Promise((re,reject)=>{
	re("this is agood value")
})
something.then((re)=>{
	console.log(re)
})
*/
const {readFile} = require('fs').promises
//const util = require('util')
//const readFilePromise = util.promisify(readFile)
const start = async () =>{
	try{
		//const first = readFilePromise('./text.txt','utf8')
	const first = await readFile('./text.txt','utf8')
	console.log(first)
	console.log("nothing is")
 	}
 	catch(err){
 		console.log("an error has occured")
 	}
}
start()

//Event emitters
const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response',(name)=>{ // response is the name of the event
	console.log(`this is a name ${name}`)
}) 

customEmitter.on('response',()=>console.log('another thing'))
customEmitter.emit('response','john')// invoking the event through the name
//any number of event listeners are possible 

//example of implicit event listeneing
/*
const http = require('http')
const server = htt.createServer()
server.on('response',(req,res)=>{ //response in actual event name 
//they extend events class or functions capabilities
	res,end('some text')
})
server.listen(8080)