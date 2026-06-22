const conn = require('./db/conn')
const {Usuario, Produto, Movimento } = require('./models/rel')

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log('tabelas sincronizadas')
    }catch(err){
        console.error('erro na sincronização')
    }finally{
        await conn.close()
        console.log('fechando a conexão com o banco de dados')
    }
}

syncDataBase()