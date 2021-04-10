const express = require('express')
// const { UUID } = require('sequelize/types')
// const { UUID } = require('sequelize/types')
const Api = express.Router()
const jwt = require('jsonwebtoken')
process.env.SECRET_KEY = 'secret'
const comment = require('../models/comment')


Api.post('/comment',(req,res)=>{
    const token = String(req.headers.authorization || '').split(' ').pop()
    const tokenData = jwt.verify(token,process.env.SECRET_KEY)
    var username = tokenData.name
    var nowDate = new Date()
    var year =nowDate.getFullYear()
    var month =nowDate.getMonth()+1
    var today =nowDate.getDate()
    var hours =nowDate.getHours()
    var minutes = nowDate.getMinutes()
    var currentdate = year + "-" + month + "-" + today + " " + hours + ":" + minutes
    const commData = {
        content:req.body.content,
        artId:req.body.id,
        id:new Date().getTime(),
        cdate:currentdate,
        username:username
    }
    comment.create(commData).then(result=>{
        // console.log(result)
        if(result){
        res.send({message:'发布成功'})
        }
    }).catch(err=>{
        console.log('err:' +err)
    }  
    )
})

module.exports = Api