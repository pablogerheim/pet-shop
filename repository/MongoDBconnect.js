import mongconnect from 'mongodb'

function getClinet() {
    const uri = "sua mongoDB chave"
    return new mongconnect.MongoClient(uri)
}

export default getClinet