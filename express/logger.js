const logger =(req,res,next)=>{
	const type = req.method
	console.log(type)
	next()
}
module.exports = logger