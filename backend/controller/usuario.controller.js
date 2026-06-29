const Usuario = require('../models/Usuario')

const cadastrar = async(req,res)=>{
    const valores = req.body

    if(!valores.nome || !valores.idade){
        res.status(400).json({message: 'todos os campos são obrigatórios'})
    }

    try{
        await Usuario.create(valores)
        res.status(201).json({message: 'dados cadastrados com sucesso'})    
    }catch(err){
        res.status(500).json({message: 'erro ao cadastrar'})
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Usuario.findAll()
        res.status(200).jsond(dados)
    }catch(err){
        res.status(500).json({message: 'erro ao listar'})
    }
}




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