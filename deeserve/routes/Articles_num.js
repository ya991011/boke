const express = require('express')
const Api = express.Router()

const Articles = require('../models/Articles')


Api.get('/article_num',(req,res)=>{
   Articles.findAll().then(result=>{
       let articles_num=0
       let currentPage=1

       console.log(result.length)

       articles_num = result.length
       currentPage= Math.ceil(articles_num/8)
       res.send({status:200,size:currentPage})
   })

   
   
})

module.exports = Api