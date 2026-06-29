const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const Movimento = db.define('Movimento',{
    codMovimento:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuario',
            key: 'codUsuario'
        }
    },
    idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produto',
            key: 'codProduto'
        }
    },
    tipoDeMov: {
        type: DataTypes.ENUM('ENTRADA','SAÍDA'),
        allowNull: false
    },
    qtdeMov: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'movimento'
})

module.exports = Movimento