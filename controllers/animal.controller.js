import animalService from "../service/animal.service.js";

async function create(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.name || animal.tipo == null || animal.proprietario_id == null) {
            throw new Error("Nome, Tipo são obrigatórios.");
        }
        animal = await animalService.create(animal);
        res.send(animal);
        logger.info(`POST /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.name || animal.tipo == null || animal.animal_id == null || animal.proprietario_id == null) {
            throw new Error("Nome, Tipo e ID são obrigatórios.");
        }
        animal = await animalService.update(animal);
        res.send(animal);
        logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function exclude(req, res, next) {
    try {
        if (!req.params.id) {
            throw new Error("ID é obrigatório.");
        }
        let animal = await animalService.exclude(req.params.id);
        res.send(animal);
        logger.info(`DELETE /animal - ${JSON.stringify(animal)}`);
    } catch (err) {
        next(err);
    }
}

async function print(req, res, next) {
    try {
        let animal = await animalService.print(req.params.id);
        res.send(animal);
        logger.info(`PRINT /animal - ${JSON.stringify(animal)}`);
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