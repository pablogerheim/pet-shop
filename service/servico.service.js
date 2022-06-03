import servicoRepository from "../repository/servico.repository.js";

async function create(servico) {
    return await servicoRepository.create(servico)
}

async function print(req) {
    if (req.query.proprietarioId) {
        return await servicoRepository.printByPropId(req.query.proprietarioId)
    } else {
        return await servicoRepository.print()
    }
}

export default {
    create,
    print
}