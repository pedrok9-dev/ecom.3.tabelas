const Usuario = require('./Usuario')
const Produto = require('./Produto')
const Movimento = require('./Movimento')

Usuario.hasMany(Movimento,{
    foreignKey: 'idUsuario',
    as: 'MovimentoUsuario',
    allowNull: false
})

Movimento.belongsTo(Usuario,{
    foreignKey: 'idProduto',
    as: 'UsuarioMovimento',
    allowNull: false
})

Produto.hasMany(Movimento,{
    foreignKey: 'idUsuario',
    as: 'MovimentoProduto',
    allowNull: false
})

Movimento.belongsTo(Produto,{
    foreignKey: 'idProduto',
    as: 'ProdutoMovimento',
    allowNull: false
})

module.exports = {Usuario, Produto, Movimento}