import mongconnect from "./MongoDBconnect.js"

async function create(post) {
    const conn = mongconnect();
    try {
        await conn.connect()
        return await conn.db("petshop").collection('blog').insertOne(post)
    } catch (err) {
        throw err
    } finally {
        await conn.close()
    }
}

async function print() {
    const conn = mongconnect();
    try {
        console.log("ola")
        await conn.connect()
        return await conn.db("petshop").collection('blog').find({}).toArray()
    } catch (err) {
        throw err
    } finally {
        await conn.close()
    }
}

async function printbyTitle(titulo) {
    const conn = mongconnect();
    try {
        await conn.connect()
        return await conn.db("petshop").collection('blog').findOne({ titulo })
    } catch (err) {
        throw err
    } finally {
        await conn.close()
    }
}

async function update(post) {
    const conn = mongconnect();
    console.log(post)
    try {
        await conn.connect()
        await conn.db("petshop").collection('blog').updateOne({ titulo: 'post' }, { $set: {...post } })
    } catch (err) {
        throw err
    } finally {
        await conn.close()
    }
}

export default {
    create,
    print,
    update,
    printbyTitle
}