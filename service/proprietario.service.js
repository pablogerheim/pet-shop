import proprietarioRepository from "../repository/proprietario.repository.js";

async function create({ name, telefone }) {
    return await proprietarioRepository.create( name, telefone )
}
async function update({ name, telefone, proprietario_id }) {
    return await proprietarioRepository.update(name, telefone, proprietario_id)
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