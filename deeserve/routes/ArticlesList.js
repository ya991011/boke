const express = require('express')
const Api = express.Router()

const Articles = require('../models/Articles')


Api.get('/articles',(req,res)=>{
    const pageNum  = req.query.page
    var start = (pageNum-1)*8
   
    Articles.findAll({where:'',offset:start,limit:8}).then(result=>{
        if(result){
            let size = 1
            // 每页显示多少条数据
            let pageSize = 8
          
            // console.log(result)
            res.send({status:201,message:'ok',data:result})    
        }
            
    })
     

})

module.exports = Api