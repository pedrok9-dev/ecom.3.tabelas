const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Produto = db.define('Produto',{
    codProduto:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'produto'
})

module.exports = Produto