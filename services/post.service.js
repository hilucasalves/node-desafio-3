import PostRepository from '../repositories/post.repository.js';

async function createPost(post) {
  return await PostRepository.createPost(post);
}

async function getPosts() {
  return await PostRepository.getPosts();
}

async function getPost(id) {
  return await PostRepository.getPost(id);
}

async function createComentario(comentario, id) {
  return await PostRepository.createComentario(comentario, id);
}

export default {
  createPost,
  getPosts,
  getPost,
  createComentario,
};
