const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
    'comment',
     {
        
        artId:{
             type:Sequelize.BIGINT,
             allowNull:false,
            //  unique:true,
         },
        content:{
            type:Sequelize.TEXT,
            // unique:true,
            allowNull:false
        },
        username:{
            type:Sequelize.STRING,
            // unique:true,
            allowNull:false
        },
        cdate:{
            type:Sequelize.TEXT,
            // unique:true,
            allowNull:false
        },
        id:{
            type:Sequelize.BIGINT,
            primaryKey:true,
            unique:true,
            allowNull:false,
            autoincrement:true
        },

}, {
    timestamps:false
},




)