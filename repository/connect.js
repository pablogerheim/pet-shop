import pg from 'pg'

async function connect() {
    if (global.connection) {
        return global.connection.connect()
    }
    const pool = new pg.Pool({
        connectionString: "postgres://muopdjnz:Pcol_pGvVtX4DKQmvqEzQjv9QKAff9oH@kesavan.db.elephantsql.com/muopdjnz"
    })
    global.connection = pool
    return pool.connect()
}

export {
    connect
}