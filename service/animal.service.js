import animalRepository from "../repository/animal.repository.js";

async function create({ name, telefone }) {
    return await animalRepository.create({ name, telefone })
}
async function update({ name, telefone }) {
    return await animalRepository.update({ name, telefone })
}
async function exclude(id) {
    return await animalRepository.exclude(id)
}
async function print(id) {
    return await animalRepository.print(id)
}

export default {
    create,
    update,
    exclude,
    print
}