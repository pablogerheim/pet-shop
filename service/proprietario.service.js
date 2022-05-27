import proprietarioRepository from "../repository/proprietario.repository.js";

async function create({ name, telefone }) {
    return await proprietarioRepository.create({ name, telefone })
}
async function update({ name, telefone }) {
    return await proprietarioRepository.update({ name, telefone })
}
async function exclude(id) {
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