const express = require('express')
const login = express.Router()
const Login = require('../models/Login')

const jwt = require('jsonwebtoken')

process.env.SECRET_KEY = 'secret'




login.post('/login',(req,res)=>{
    let loginData = {
        name:req.body.name,
        password:req.body.password
    }
    Login.findOne({where:{name:loginData.name}}).then(user=>{
        if(user){
            // console.log(user)
            if(loginData.password==user.password){
            // res.send('登陆成功')
            console.log('登陆成功')
            // 生成token
            let token = jwt.sign(user.dataValues,process.env.SECRET_KEY)
            res.send({status:200,token})

            }else{
               res.send({message:'用户名或密码错误'})

            }
            // res.send('登陆成功')
            // console.log('登陆成功')
        }else{
            res.send('该用户未注册，请先注册！')
            console.log('该用户未注册，请先注册！')
        }

    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = login
// ,{expiresIn:1440}