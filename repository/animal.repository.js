import Animal from "../models/animal.models.js"


async function create(animal) {
    try {
        return await Animal.create(animal)
    } catch (err) {
        throw err
    }
}

async function update(animal) {
    try {
        await Animal.update(animal, {
            where: {
                animalId: animal.animalId
            }
        })
        return await print(animal.animalId)
    } catch (err) {
        throw err
    }
}

async function exclude(id) {
    try {
        return await Animal.destroy({
            where: {
                animalId: id
            }
        })
    } catch (err) {
        throw err
    }
}

async function print(id) {
    try {
        if (id) {
            return await Animal.findByPk(id)
        } else {
            return await Animal.findAll()
        }
    } catch (err) {
        throw err
    }
}

async function printByPropId(id) {
    try {

        return await Animal.findOne({
            where: {
                proprietarioId: id
            }
        })

    } catch (err) {
        throw err
    }
}


export default {
    create,
    update,
    exclude,
    print,
    printByPropId
}