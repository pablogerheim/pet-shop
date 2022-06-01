import proprietarioRepository from "../repository/proprietario.repository.js";
import animalRepository from "../repository/animal.repository.js";

async function create({ name, telefone }) {
    return await proprietarioRepository.create(name, telefone)
}
async function update({ name, telefone, proprietario_id }) {
    return await proprietarioRepository.update(name, telefone, proprietario_id)
}
async function exclude(id) {
    let animalProp = await animalRepository.printByProprietario(id)
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