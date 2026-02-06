const { MongoClient } = require("mongodb");
const { DB_NAME, DB_URL } = require("../config/dbConfig");

let client = null;

async function dbConnect() {
  if (!client) {
    client = new MongoClient(DB_URL);
    await client.connect();
  }
  return client;
}

async function createCollection(collectionName) {
  const connectedDB = await dbConnect();
  return connectedDB.db(DB_NAME).collection(collectionName);
}

async function getData(collectionName, filter = {}) {
  const collection = await createCollection(collectionName);
  const result = await collection.find(filter).toArray();
  return result;
}

async function insertData(collectionName, data) {
  const collection = await createCollection(collectionName);
  const result = await collection.insertOne(data);
  return result;
}

async function updateData(collectionName, updateDoc,filter ) {
  const collection = await createCollection(collectionName);
  const result = await collection.updateOne(filter, { $set: updateDoc });
  return result;
}

async function deleteData(collectionName, filter) {
  const collection = await createCollection(collectionName);
  const result = await collection.deleteOne(filter);
  return result;
}

async function closeConnection() {
  if (client) {
    await client.close();
    client = null;
  }
}

module.exports = {
  dbConnect,
  createCollection,
  getData,
  insertData,
  updateData,
  deleteData,
  closeConnection
};