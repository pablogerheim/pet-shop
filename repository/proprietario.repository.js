import { connect } from "./connect.js";


async function create( name, telefone ) {
    const conn = await connect();
    try{
        const sql = 'INSERT INTO proprietarios (nome, telefone) VALUES ($1, $2) RETURNING *'
        const values = [name, telefone]
        const res = await conn.query(sql, values)
        return res.rows[0]
    }catch(err){
        throw err
    }finally{
        conn.release()
    }
}

async function update( name, telefone, id ) {
    const conn = await connect();
    try {
        const sql = 'UPDATE proprietarios SET nome = $1, telefone = $2 WHERE proprietario_id = $3 RETURNING *'
        const values = [name, telefone, id]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch(err) {
        throw err
    } finally {
        conn.release()
    }
}

async function exclude(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM proprietarios WHERE proprietario_id = $1", [id])
        return `proprietario ${id} deletado`
    } catch(err) {
        throw err
    } finally {
        conn.release()
    }
}

async function print( id ) {
    const conn = await connect();
    try {
        if (id) {
            const res = await conn.query("SELECT * FROM proprietarios WHERE proprietario_id = $1",[id])
            return res.rows[0]
        }
        const res = await conn.query("SELECT * FROM proprietarios")
        return res.rows
    } catch(err) {
        throw err
    } finally {
        conn.release()
    }
}



export default {
    create,
    update,
    exclude,
    print
}