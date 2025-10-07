const {conexao} = require('../conexao.js')

async function deletarEmpresa(id){

    let sql = 'DELETE FROM tbl_empresa WHERE id = ?'
    
    sql = `DELETE FROM tbl_empresa WHERE id = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[id]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}


module.exports = {deletarEmpresa}
