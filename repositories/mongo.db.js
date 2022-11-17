import mongodb from 'mongodb';

const ObjectID = mongodb.ObjectID;

function getClient() {
  const uri = 'mongodb+srv://teste:teste@cluster0.108b7hu.mongodb.net/test';
  return new mongodb.MongoClient(uri);
}

export { getClient, ObjectID };
