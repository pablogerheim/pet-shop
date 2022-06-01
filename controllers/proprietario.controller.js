import proprietarioService from "../service/proprietario.service.js";

async function create(req, res, next) {
    try {
        let proprietario = req.body;
        if (!proprietario.nome || proprietario.telefone == null) {
            throw new Error("Nome e Telefone são obrigatórios.");
        }
        proprietario = await proprietarioService.create(proprietario);
        res.send(proprietario);
        logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    try {
        let proprietario = req.body;
        if (!proprietario.nome || proprietario.telefone == null || proprietario.proprietarioId == null) {
            throw new Error("Nome, Telefone e ID são obrigatórios.");
        }
        proprietario = await proprietarioService.update(proprietario);
        res.send(proprietario);
        logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}

async function exclude(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error("ID é obrigatório.");
        }
        let proprietario = await proprietarioService.exclude(req.params.id);
        res.send(proprietario);
        logger.info(`DELETE /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}

async function print(req, res, next) {
    try {
        let proprietario = await proprietarioService.print(req.params.id);
        res.send(proprietario);
        logger.info(`PRINT /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
}

export default {
    create,
    update,
    exclude,
    print
}