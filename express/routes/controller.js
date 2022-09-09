const express = require('express')
const getThing = (req,res)=>{
	res.send("first page")
}

const anotherThing = (req,res)=>{
	res.send("second post page")
}

module.exports = {getThing,anotherThing}