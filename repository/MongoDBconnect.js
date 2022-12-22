import mongconnect from 'mongodb'

function getClinet() {
    const uri = "key of database mongodb"
    return new mongconnect.MongoClient(uri)
}

export default getClinet