const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define(
     'usercenter',
     {
         avartor:{
             type:Sequelize.STRING,
             primaryKey:true
         },
         nickname:{
             type:Sequelize.STRING

         },
         sex:{
            type:Sequelize.STRING

        },
        // region:{
        //     type:Sequelize.TEXT

        // },
         person_sign:{
            type:Sequelize.STRING

        },
}, {
    timestamps:false
},




)
