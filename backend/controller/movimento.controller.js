const Usuario = require('../models/Usuario')
const Produto = require('../models/Produto')
const Movimento = require('../models/Movimento')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.idUsuario || !valores.idProduto || !valores.tipo || !valores.qtdeMov || !valores.data){
        res.status(400).json({message: 'todos os campos são obrigatórios'})
    }
}








































// const cadastrar = async(req,res)=>{
//     const valores = req.body

//     if(!valores.idUsuario || !valores.idProduto || !valores.tipo || !valores.qtdeMov || !valores.data){
//         return res.status(400).json({message: 'todos os campos são obrigatórios'})
//     }
//     try{
//         const produto = await Produto.findByPk(valores.idProduto)
//         if(!produto){
//             return res.status(404).json({message: 'não encontrado'})
//         }
//         const usuario = await Usuario.findByPk(valores.idUsuario)
//         if(!usuario){
//             return res.status(404).json({message: 'não encontrado'})
//         }

//         let novaQuantidade = produto.quantidade
//         if(valores.tipo === 'ENTRADA'){
//             novaQuantidade += valores.qtdeMov
//         }else if(valores.tipo === 'SAIDA'){
//             if(produto.quantidade < valores.qtdeMov){
//                 return res.status(400).json({message: 'quantidade insuficiente no estoque'})
//             }
//             novaQuantidade -= valores.qtdeMov
//         }else{
//             return res.status(400).json({message: 'tipo de movimentação inválida'})
//         }

//         await produto.update({quantidade: novaQuantidade})

//         const movimento = await Movimento.create(valores)
//         res.status(201).json(movimento)
//     }catch(err){
//         res.status(500).json({message: 'erro ao cadastrar'})
//     }
// }