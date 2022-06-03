import blogRepository from "../repository/blog.repository.js";

async function create(blog) {
    return await blogRepository.create(blog)
}

async function print(req) {
    if (req.query.titulo) {
        return await blogRepository.printbyTitle(req.query.titulo)
    } else {
        return await blogRepository.print()
    }
}

async function update(post) {
    let postObj = await blogRepository.printbyTitle(post.titulo)
    let helperObj = { nome: post.nome, conteudo: post.conteudo }
    postObj.comentarios.push(helperObj)
    return await blogRepository.update(postObj)
}

export default {
    create,
    print,
    update
}