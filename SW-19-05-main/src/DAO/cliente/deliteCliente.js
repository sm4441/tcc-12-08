// ok
const {conexao} = require('../conexao.js')

async function deletarUsuario(codigo){
    
    const sql = `DELETE FROM tbl_candidato WHERE codigo = ?`
    const conn = await conexao()
    
    try {
        // Executar a consulta
        const [results] = await conn.query(sql,[codigo]);

        await conn.end()
        return results
      } catch (err) {
        return err.message
      }
}

module.exports = {deletarUsuario}