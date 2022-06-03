import servicoService from "../service/servico.service.js";

async function create(req, res, next) {
    try {
        let servico = req.body;
        if (!servico.descricao == null || servico.valor == null || servico.animalId == null) {
            throw new Error("Descricao, Valor são obrigatórios.");
        }
        servico = await servicoService.create(servico);
        res.send(servico);
        logger.info(`POST /servico - ${JSON.stringify(servico)}`);
    } catch (err) {
        next(err);
    }
}

async function print(req, res, next) {
    try {
        let servico = await servicoService.print(req);
        res.send(servico);
        logger.info(`PRINT /servico - ${JSON.stringify(servico)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    create,
    print
}