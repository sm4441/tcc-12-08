//funcionando

const { conexao } = require('../conexao.js');

async function inserirCandidato(codigo, cpf, telefone, nome_completo, email, limite, id_endereco, id_status) {
    const sql = `
        INSERT INTO tbl_candidato 
        (codigo, cpf, telefone, nome_completo, email, limite, id_endereco, id_status) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const conn = await conexao();
    try {
        const [resultado] = await conn.query(sql, [
            codigo, cpf, telefone, nome_completo, email, limite, id_endereco, id_status
        ]);
        await conn.end(); // se não for pool de conexões
        return { sucesso: true, idInserido: resultado.insertId };
    } catch (err) {
        return { sucesso: false, erro: err.message };
    }
}

module.exports = { inserirCandidato };
