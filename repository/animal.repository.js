import { connect } from "./connect.js";


async function create(name, tipo, proprietario_id) {
    console.log(name)
    console.log(tipo)
    console.log(proprietario_id)
    const conn = await connect();
    try {
        const sql = 'INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *'
        const values = [name, tipo, proprietario_id]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function update(name, tipo, animal_id, proprietario_id) {
    const conn = await connect();
    try {
        const sql = 'UPDATE animais SET nome = $1, tipo = $2, proprietario_id = $4 WHERE animal_id = $3 RETURNING *'
        const values = [name, tipo, animal_id, proprietario_id]
        const res = await conn.query(sql, values)
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function exclude(id) {
    const conn = await connect();
    try {
        await conn.query("DELETE FROM animais WHERE animal_id = $1", [id])
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function print(id) {
    const conn = await connect();
    try {
        if (id) {
            const res = await conn.query("SELECT * FROM animais WHERE animal_id = $1", [id])
            return res.rows[0]
        }
        const res = await conn.query("SELECT * FROM animais")
        return res.rows
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}

async function printByProprietario(id) {
    const conn = await connect();
    try {
        const res = await conn.query("SELECT * FROM animais WHERE proprietario_id = $1", [id])
        return res.rows[0]
    } catch (err) {
        throw err
    } finally {
        conn.release()
    }
}


export default {
    create,
    update,
    exclude,
    print,
    printByProprietario
}