const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
     'user',
     {
         name:{
             type:Sequelize.STRING,
             primaryKey:true,
             unique:true,
             allowNull:false
         },

         password:{
             type:Sequelize.STRING,
             allowNull:false
            

         },
         email:{
             type:Sequelize.STRING,
             unique:true,
             allowNull:false
         }
}, {
    timestamps:false
},




)


         