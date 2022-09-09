//__dirname give acces to current directory __filename gives file name
const func = (name) => console.log(`Hello there ${name}`);
func("knd")
//Exports
//module.exports = {properties} can explicicity share properties
//const names  = require('./filename')
//module.exports = function name
//module.exports.items = ['items1','items2']
//if the imported moduele has function invoking then it will execute 
//in the child function 

const os = require('os');
const user = os.userInfo()
console.log(user.username)


const path = require('path')
console.log(path.sep)

//const filePath = path.join('/context','subfolder',test.txt')

//const base = path.basename(filepath)

//const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
//console.log(absolute) it is going to the absolute path like from origin

/*
const {readFileSync,writeFileSync} = require('fs')
//writeFileSync('./text.txt',"hello world")
console.log(readFileSync('./text.txt','utf8'))
writeFileSync('./text.txt',"this has been overwritten",{flag:'a'}) // to append without overwriting
console.log(readFileSync('./text.txt','utf8'))
*/


//ASYNC APPROACH USING CALLBACK 

/*
const {readFile, writeFile} = require('fs')
readFile('./text.txt','utf8',(err,result) =>{
	if (err){
		console.log(err)
		return
	}
	console.log(result)

})
*/
//HTTP MODULE
/*

const http = require('http')
const server = http.createServer((req,res)=>{
if(req.url == '/'){
	res.end("hello thsi is the main page")
}

if(req.url === "/about"){
	res.end("hello this is about us")
}


res.end(`<a href="/">backhome</a>`)
})
server.listen(5000)
*/