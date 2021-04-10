const express = require('express')
const Api =express()
const user_center = require('../models/UserCenter')


const multer = require('multer')
const upload = multer({dest:'public/uploads/'})


Api.post('/usercenter',upload.single('avartor'),(req,res)=>{
   

})



module.exports = Api