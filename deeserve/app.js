const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
const cors = require('cors')
app.use(cors())
const path = require('path')
app.use('/uploads',express.static(__dirname, + '/uploads'))
// app.use('/',(req,res)=>{
//        res.send('ok')
  
// })
const Register = require('./routes/register')
const Login = require('./routes/login')
const Createaritical = require('./routes/CreateArticles')
const articlesList = require('./routes/ArticlesList')
const article = require('./routes/Articles')
const comment = require('./routes/comment')
const commentList = require('./routes/commentList')
const User_img = require('./routes/Uploads')
// const Image = require('./routes/Img')
const Articles_num = require('./routes/Articles_num')

app.use('/api',Login)
app.use('/api',Register)
app.use('/api',Createaritical)
app.use('/api',article)
app.use('/api',articlesList)
app.use('/api',comment)
app.use('/api',commentList)
app.use('/api',User_img)
// app.use('/api',Image)
app.use('/api',Articles_num)

app.listen(8085,function(err){
    if(err) {throw err}else{
        console.log('服务器连接成功')}

    
})
module.exports = app