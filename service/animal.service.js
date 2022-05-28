import animalRepository from "../repository/animal.repository.js";

async function create({ name, tipo, proprietario_id }) {
    return await animalRepository.create(name, tipo, proprietario_id )
}
async function update({ name, tipo, animal_id, proprietario_id }) {
    return await animalRepository.update(name, tipo, animal_id, proprietario_id )
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