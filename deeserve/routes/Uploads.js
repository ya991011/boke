const express = require('express')
const Api = express.Router()
const fs = require('fs')
const multer = require('multer')
Api.post('/uploads',multer({dest:'uploads'}).array('file',1),function(req,res,next){
    let files= req.files
    let file= files[0]
    let fileInfo={}
    let path = 'uploads/' + Date.now().toString()+ '_' +file.originalname
    fs.renameSync('./uploads/' + file.filename,path)
    fileInfo.type= file.mimetype
    fileInfo.name = file.originalname
    fileInfo.size = file.size
    fileInfo.path = path
    res.json({
        code:0,
        msg:'ok',
        data:fileInfo
    })
    
})

module.exports = Api