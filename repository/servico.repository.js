import Servico from "../models/servico.models.js"
import animal from "../models/animal.models.js"


async function create(servico) {
    try {
        return await Servico.create(servico)
    } catch (err) {
        throw err
    }
}

async function print() {
    try {
        return await Servico.findAll()
    } catch (err) {
        throw err
    }
}

async function printByPropId(id) {
    try {
        return await Servico.findAll({
            include: [{
                model: animal,
                where: {
                    proprietarioId: id
                }
            }]
        })

    } catch (err) {
        throw err
    }
}


export default {
    create,
    print,
    printByPropId
}