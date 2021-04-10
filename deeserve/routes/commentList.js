const express = require('express')
// const { UUID } = require('sequelize/types')
// const { UUID } = require('sequelize/types')
const Api = express.Router()

const comment = require('../models/comment')



Api.post('/comments',(req,res)=>{
    const artId = req.body.id
    comment.findAll({where:{artId:`${artId}`}}).then(result=>{
        res.send(result)
    })
    console.log('artId')
    // res.send('okk')
})

module.exports = Api