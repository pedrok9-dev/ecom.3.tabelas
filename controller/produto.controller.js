const Produto = require('../models/Produto')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.quantidade || !valores.preco){
        return res.status(400).json({message: 'todos os campos são obrigatórios'})
    }

    try{
        await Produto.create(valores)
        res.status(201).json({message: 'dados cadastrados com sucesso'})
    }catch(err){
        res.status(500).json({message:'erro ao cadastrar'})
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Produto.findAll()
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message:'erro ao listar'})
    }
}

const buscarCod = async(req,res)=>{
    const id = req.params.id
    try{
        const dados = await Produto.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'não encontrado'})
        }else{
            res.status(200).json(dados)
        }
    }catch(err){
        res.status(500).json({message: 'erro ao buscar'})
    }
}

const buscarNome = async(req,res)=>{
    const nome = req.params.nome
    try{
        const dados = await Produto.findOne({where:{nome: nome}})
        if(!dados){
            res.status(404).json({message:'não encontrado'})
        }else{
            res.status(200).json(dados)
        }
    }catch(err){
        res.status(500).json({message: 'erro ao buscar'})
    }
}

const excluir = async(req,res)=>{
    const id = req.params.id
    try{
        const dados = await Produto.findByPk(id)
        if(!dados){
            res.status(404).json({message:'não encontrado'})
        }else{
            await Produto.destroy({where:{codProduto: id}})
            res.status(200).json({message:'excluido cm sucesso'})
        }
    }catch(err){
        res.status(500).json({message:'erro ao apagar'})
    }
}

const atualizar = async(req,res)=>{
    const id = req.params.id
    const valores = req.body
    try{
        let dados = await Produto.findByPk(id)
        if(!dados){
            res.status(404).json({message: 'não encontrado'})
        }else{
            await Produto.update(valores, {where: {codProduto: id}})
            dados = await Produto.findByPk(id)
            res.status(200).json(dados)
        }
    }catch(err){
        res.status(500).json({message: 'erro ao atualizar'})
    }
}

module.exports = {cadastrar, listar, buscarCod, buscarNome, excluir, atualizar}