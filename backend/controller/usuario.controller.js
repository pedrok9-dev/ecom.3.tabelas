const Usuario = require('../models/Usuario')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.email || !valores.senha){
        res.status(400).json({message: 'todos os campos são obrigatórios'})
    }

    try{
        await Usuario.create(valores)
        res.status(201).json({message: 'cadastrado com sucesso'})
    }catch(err){
        res.status(500).json({message: 'erro ao cadastrar'})
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message: 'erro ao listar'})
    }
}

const buscarPorCod = async(req,res)=>{
    const cod = req.params.cod
    try{
        const dado = await Usuario.findByPk(cod)
        if(!dado){
            res.status(404).json({message: 'não encontrado'})
        }else{
            res.status(200).json(dado)
        }
    }catch(err){
        res.status(500).json({message: 'erro ao buscra por cod'})
    }
}

const buscarPorNome = async(req,res)=>{
    const nome = req.params.nome
    try{
        const dado = await Usuario.findOne({where: {nome: nome}})
        if(!dado){
            res.status(404).json({message: 'não encontrado'})
        }else{
            res.status(200).json(dado)
        }
    }catch(err){
        res.status(500).json({message: 'erro ao buscra pelo nome'})
    }
}

const excluir = async(req,res)=>{
    const cod = req.params.cod
    try{
        const dado = await Usuario.findByPk(cod)
        if(!dado){
            res.status(404).json({message: 'não encontrado'})
        }else{
            await Usuario.destroy({where: {codUsuario: cod}})
        }
    }catch(err){
        res.status(500).json({message: 'erros ao excluir'})
    }
}

const atualizar = async(req,res)=>{
    const cod = req.params.cod
    const valores = req.params.valores
    try{
        const dados = await Usuario.findByPk(cod)
        if(!dados){
            res.status(404).json({message: 'não encontrado'})
        }else{
            await Usuario.update(valores, {where:{codUsuario: cod}})
            dados = await Usuario.findByPk(cod)
            res.status(200).json(dados)
        }
    }catch(err){
        res.status(500).json({message: 'erro ao atualizar'})
    }
}

module.exports = {cadastrar, listar, buscarPorCod, buscarPorNome, excluir, atualizar}




// const atualizar = async (req,res)=>{
//     const id = req.params.id
//     const valores = req.body
//     try{
//         let dados = await Usuario.findByPk(id)
//         if(!dados){
//             res.status(404).json({message: 'Usuário não encontrado no banco de dados!'})
//         }else{
//             await Usuario.update(valores, { where: { codUsuario: id}})
//             dados = await Usuario.findByPk(id)
//             res.status(200).json(dados)
//         }
//     }catch(err){
//         console.error('Não foi possível atualizar o Usuário',err)
//         res.status(500).json({message: 'Não foi possível atualizar o Usuário'})
//     }
// }