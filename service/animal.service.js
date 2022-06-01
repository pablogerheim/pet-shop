import animalRepository from "../repository/animal.repository.js";

async function create(animal) {
    return await animalRepository.create(animal)
}
async function update(animal) {
    return await animalRepository.update(animal)
}
async function exclude(id) {
    return await animalRepository.exclude(id)
}
async function print(req) {
    if (req.query.proprietarioId) {
        return await animalRepository.printByPropId(req.query.proprietarioId)
    } else {
        return await animalRepository.print(req.params.id)
    }
}

export default {
    create,
    update,
    exclude,
    print
}