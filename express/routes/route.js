const express = require('express')
const router = express.Router()
const {anotherThing,getThing} = require('./controller')
router.get("/",getThing)

router.get("/1",anotherThing)
//router.route('/'.get(function).post(function))
module.exports = router