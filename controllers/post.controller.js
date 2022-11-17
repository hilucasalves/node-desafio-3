import PostService from '../services/post.service.js';

async function createPost(req, res, next) {
  try {
    let post = req.body;
    if (!post.titulo || !post.conteudo) {
      throw new Error('Título e Conteúdo são obrigatórios.');
    }
    post = await PostService.createPost(post);
    res.send(post);
    logger.info(`POST /post - ${JSON.stringify(post)}`);
  } catch (err) {
    next(err);
  }
}

async function getPosts(req, res, next) {
  try {
    res.send(await PostService.getPosts());
    logger.info('GET /post');
  } catch (err) {
    next(err);
  }
}

async function getPost(req, res, next) {
  try {
    res.send(await PostService.getPost(req.params.id));
    logger.info('GET /post');
  } catch (err) {
    next(err);
  }
}

async function createComentario(req, res, next) {
  try {
    let comentario = req.body;
    if (!comentario.id || !comentario.nome || !comentario.conteudo) {
      throw new Error(
        'Post ID, Nome do Autor e Conteúdo do Comentário são obrigatórios.'
      );
    }
    let id = comentario.id;
    comentario = await PostService.createComentario(
      { nome: comentario.nome, conteudo: comentario.conteudo },
      id
    );
    res.send(comentario);
    logger.info(`POST /comentario - ${JSON.stringify(comentario)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createPost,
  getPosts,
  getPost,
  createComentario,
};
