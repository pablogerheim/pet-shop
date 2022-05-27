import { connect } from "./connect.js";


async function create({ name, telefone }) {
    const conn = await connect();
    const sql = 'INSERT INTO animal (name, telefone) VALUES ($1, $2)'
    const values = [name, telefone]
    const res = await conn.query(sql, values)
    return {}
}



export default {
    create,
    update,
    exclude,
    print
}