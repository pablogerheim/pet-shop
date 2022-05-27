import pg from 'pg'

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://jxskguer:uCoQ_3J2csVhqaoo0CBO7NfezyLsj6OP@kesavan.db.elephantsql.com/jxskguer"
    })
    global.connection = pool
    return pool.connect()
}

export {
    connect
}