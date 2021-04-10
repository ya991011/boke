const express = require('express')
const Api = express.Router()

const Articles = require('../models/Articles')


Api.post('/article',(req,res)=>{
    const Id = req.body.id
    console.log(Id)
    // var articleId = req.query.articleId||''
    Articles.findOne({where:{id:`${Id}`}}).then(result=>{
        if(result){
        res.send(result)  
        // console.log(result)       
        }else{
            res.send({status:400,message:'网络不稳定！'})
        }
            
    }).catch(err=>{
        console.log('err:'+ err)
    })
     

})

module.exports = Api