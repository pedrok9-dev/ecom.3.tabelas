const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const usuarioController = require('./controller/usuario.controller')
const produtoController = require('./controller/produto.controller')
const movimentoController = require('./controller/movimento.controller')
const hostname = 'localhost'
const PORT = 3000
//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
//rotas
app.post('/usuario',usuarioController.cadastrar)
app.get('/usuarios',usuarioController.listar)
app.get('/usuario/:id',usuarioController.buscarCod)
app.get('/usuario/:nome',usuarioController.buscarNome)
app.delete('/usuario/:id',usuarioController.excluir)
app.put('/usuario/:id',usuarioController.atualizar)

app.post('/produto',produtoController.cadastrar)
app.get('/produtos',produtoController.listar)
app.get('/produto/:id',produtoController.buscarPorCod)
app.get('/produto/:nome',produtoController.buscarPorNome)
app.delete('/produto/:id',produtoController.excluir)
app.put('/produto/:id',produtoController.atualizar)

app.post('/movimento',movimentoController.cadastrar)
app.get('/movimentos',movimentoController.listar)

app.get('/',(req,res)=>{
    res.status(200).json({message: 'rodando'})
})
//server
conn.sync()

.then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`servidor rodando em: http://${hostname}:${PORT}`)
    })
})
.catch((err)=>{
    console.error('erro ao conectar com o banco')
})