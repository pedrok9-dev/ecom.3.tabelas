const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Produto = db.define('Produto',{
    codProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'Produtos'
})

module.exports = Produto