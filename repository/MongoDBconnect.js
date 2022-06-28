import mongconnect from 'mongodb'

function getClinet() {
    const uri = "mongodb+srv://pablo1:123qweasd@livraria.4wvs9zi.mongodb.net/test"
    return new mongconnect.MongoClient(uri)
}

export default getClinet