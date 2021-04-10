const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
     'article',
     {
         title:{
             type:Sequelize.TEXT,
             primaryKey:true
         },
         content:{
             type:Sequelize.TEXT

         },
}, {
    timestamps:false
},




)

