const Sequelize = require('sequelize')
const db = {}
// const mysql = require('mysql')

const sequelize = new Sequelize('login1','root','root',{
    host:'localhost',
    dialect:'mysql',
    pool:{
        mix:5,
        min:0,
        acquire:30000,
        idle:10000
    },

})
try {
   sequelize.authenticate();
   console.log('数据库连接成功')
}catch(error){
    console.error('数据库连接失败')
}
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

// const connection = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     port:3306,
//     database:'login'
// })
// connection.connect((err)=>{
//     if(err) throw err
//     else{
//         console.log('数据库连接成功')
//     }
// })

// module.exports = connection
