import blogService from "../service/blog.service.js";

async function create(req, res, next) {
    try {
        let blog = req.body;
        if (!blog.titulo == null || blog.conteudo == null) {
            throw new Error("Titulo e Conteudo são obrigatórios.");
        }
        blog = await blogService.create(blog);
        res.send(blog);
        logger.info(`POST /blog - ${JSON.stringify(blog)}`);
    } catch (err) {
        next(err);
    }
}

async function print(req, res, next) {
    try {
        let blog = await blogService.print(req);
        res.send(blog);
        logger.info(`PRINT /blog - ${JSON.stringify(blog)}`);
    } catch (err) {
        next(err);
    }
}

async function update(req, res, next) {
    try {
        let blog = req.body;
        if (!blog.titulo == null || blog.nome == null || blog.conteudo == null) {
            throw new Error("Descricao, Valor são obrigatórios.");
        }
        blog = await blogService.update(blog);
        res.send(blog);
        logger.info(`POST /blog - ${JSON.stringify(blog)}`);
    } catch (err) {
        next(err);
    }
}
export default {
    create,
    print,
    update
}