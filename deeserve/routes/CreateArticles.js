const express = require('express')
const Createaritical = express.Router()

const Articles = require('../models/Articles')

Createaritical.post('/createarticles',(req,res)=>{
    var nowDate = new Date()
    var year =nowDate.getFullYear()
    var month =nowDate.getMonth()+1
    var today =nowDate.getDate()
    var hours =nowDate.getHours()
    var minutes = nowDate.getMinutes()
    // var seconds = nowDate.getSeconds()
    var currentdate = year + "-" + month + "-" + today + " " + hours + ":" + minutes
    console.log(currentdate)

    let ariticalData = {
        id: new Date().getTime(),
        artTitle:req.body.artTitle,
        category:req.body.category,
        content:req.body.content,
        tag:req.body.tag,
        cdate: currentdate,
        editdate: currentdate,
        img:req.body.imageUrl


    }
    Articles.create(ariticalData).then((aritical)=>{
        if(aritical){
            res.send(ariticalData)

        }
    }).catch((err)=>{
        if(err){
            console.log('error:' +err)
        }
    })
})

module.exports = Createaritical