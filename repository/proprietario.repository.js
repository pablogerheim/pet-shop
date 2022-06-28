import Proprietario from "../models/proprietario.models.js"

async function create(proprietario) {
    try {
        return await Proprietario.create(proprietario)
    } catch (err) {
        throw err
    }
}

async function update(proprietario) {
    try {
        await Proprietario.update(proprietario, {
            where: {
                proprietarioId: proprietario.proprietarioId
            }
        })
        return await print(proprietario.proprietarioId)
    } catch (err) {
        throw err
    }
}

async function exclude(id) {
    try {
        return await Proprietario.destroy({
            where: {
                proprietarioId: id
            }
        })
    } catch (err) {
        throw err
    }
}

async function print(id) {
    try {
        if (id) {
            return await Proprietario.findByPk(id)
        } else {
            return await Proprietario.findAll()
        }
    } catch (err) {
        throw err
    }
}

export default {
    create,
    update,
    exclude,
    print
}