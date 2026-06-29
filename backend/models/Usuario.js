const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Usuario = db.define('Usuario',{
    codUsuario:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'usuario'
})

module.exports = Usuario