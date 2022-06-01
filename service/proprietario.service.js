import proprietarioRepository from "../repository/proprietario.repository.js";
import animalRepository from "../repository/animal.repository.js";

async function create(proprietario) {
    return await proprietarioRepository.create(proprietario)
}
async function update(proprietario) {
    return await proprietarioRepository.update(proprietario)
}
async function exclude(id) {
    let animalProp = await animalRepository.printByPropId(id)
    if (animalProp) { throw new Error("Esse proprietario tem animais."); }
    return await proprietarioRepository.exclude(id)
}
async function print(id) {
    return await proprietarioRepository.print(id)
}

export default {
    create,
    update,
    exclude,
    print
}