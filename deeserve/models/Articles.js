const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
     'article',
     {
        id:{
             type:Sequelize.BIGINT,
             primaryKey:true,
             unique:true,
             allowNull:false,
             autoincrement:true
         },
        artTitle:{
             type:Sequelize.TEXT,
             allowNull:false,
            //  unique:true,
         },
        category:{
            type:Sequelize.TEXT,
            // unique:true,
            allowNull:false
        },
        content:{
            type:Sequelize.TEXT,
            // unique:true,
            allowNull:false
        },
        tag:{
            type:Sequelize.TEXT,
            // unique:true,
            allowNull:false
        },
        cdate:{
            type:Sequelize.TEXT,
            // unique:true,
            allowNull:false
        },
        editdate:{
            type:Sequelize.TEXT,
            // unique:true,
            allowNull:false

        },
        img:{
            type:Sequelize.STRING,
            allowNull:false

        }


}, {
    timestamps:false
},




)


         