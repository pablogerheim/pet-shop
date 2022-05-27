import { connect } from "./connect.js";


async function create({ name, telefone }) {
    const conn = await connect();
    const sql = 'INSERT INTO animal (name, telefone) VALUES ($1, $2) RETURNING *'
    const values = [name, telefone]
    const res = await conn.query(sql, values)
    return {}
}

async function pirnt(params) {
    const conn = await connect()
    try {
        if (params = "id") {

        }

        const res = await conn.query("SELECT * FROM animal")
    } catch (error) {
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