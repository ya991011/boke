const express = require('express')
const register = express.Router()

const Login = require('../models/Login')
const crypto = require('crypto');


register.post('/register',(req,res)=>{
    const secret = 'abcdefg';
    let userData = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    Login.findOne({where:{name:req.body.name}}).then((user)=>{
        if(!user){
                Login.create(userData).then((user)=>{
                    res.json({status:user.name + 'resgistered',status:200})
                }).catch((err)=>{
                    res.send({status:404,error})
                })
            // }
        }else{
            res.json({error:"用户已存在！"})
        }

    }).catch((err)=>{
        res.send('no ok')
    })

})
module.exports = register