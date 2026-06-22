const Produto = require('../models/Produto')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.categoria || !valores.numero || !valores.quantidade || !valores.precoUnit){
        res.status(400).json({message: 'todos os campos são obrigatórios'})
    }

    try{
        await Produto.create(valores)
        res.status(201).json({message: 'cadastrado com sucesso'})
    }catch(err){
        res.status(500).json({message: 'erro ao cadastrar'})
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Produto.findAll()
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message: 'erro ao listar'})
    }
}

const buscarPorCod = async(req,res)=>{
    const cod = req.params.cod
    try{
        const dado = await Produto.findByPk(cod)
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
        const dado = await Produto.findByPk(cod)
        if(!dado){
            res.status(404).json({message: 'não encontrado'})
        }else{
            await Produto.destroy({where: {codUsuario: cod}})
        }
    }catch(err){
        res.status(500).json({message: 'erros ao excluir'})
    }
}

const atualizar = async(req,res)=>{
    const cod = req.params.cod
    const valores = req.params.valores
    try{
        const dados = await Produto.findByPk(cod)
        if(!dados){
            res.status(404).json({message: 'não encontrado'})
        }else{
            await Produto.update(valores, {where:{codUsuario: cod}})
            dados = await Produto.findByPk(cod)
            res.status(200).json(dados)
        }
    }catch(err){
        res.status(500).json({message: 'erro ao atualizar'})
    }
}

module.exports = {cadastrar, listar, buscarPorCod, buscarPorNome, excluir, atualizar}