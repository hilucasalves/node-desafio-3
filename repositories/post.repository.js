import { getClient, ObjectID } from './mongo.db.js';

async function createPost(post) {
  const client = getClient();
  try {
    await client.connect();
    await client.db('store').collection('posts').insertOne(post);
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function updatePost(post) {
  const client = getClient();
  try {
    await client.connect();
    const objectId = ObjectID(post._id);
    await client
      .db('store')
      .collection('posts')
      .updateOne({ _id: objectId }, { $set: { ...post } });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getPost(id) {
  const client = getClient();
  try {
    await client.connect();
    const objectId = ObjectID(id);
    return await client
      .db('store')
      .collection('posts')
      .findOne({ _id: objectId });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function createComentario(comentario, id) {
  try {
    const post = await getPost(id);
    if (!post.comentarios) post.comentarios = [];
    post.comentarios.push(comentario);
    await updatePost(post);
  } catch (err) {
    throw err;
  }
}

async function deleteComentario(id, index) {
  try {
    const post = await getPost(id);
    post.comentarios.splice(index, 1);
    await updatePost(post);
  } catch (err) {
    throw err;
  }
}

async function getPosts() {
  const client = getClient();
  try {
    await client.connect();
    return await client.db('store').collection('posts').find({}).toArray();
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function deletePost(id) {
  const client = getClient();
  try {
    await client.connect();
    return await client.db('store').collection('posts').deleteOne({ id });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

export default {
  createPost,
  updatePost,
  getPost,
  createComentario,
  deleteComentario,
  getPosts,
  deletePost,
};
