const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const VwHistoricoSaida = db.define('vwHistoricoView',{
    codView:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeProduto: {
        type: DataTypes.STRING(100)
    },
    categoria:{
        type: DataTypes.STRING
    },
    qtdeMov:{
        type: DataTypes.INTEGER
    },
    data:{
        type: DataTypes.DATEONLY
    }
},{
    timestamps: false,
    tableName: 'vw_historico_saida'
})

module.exports = VwHistoricoSaida