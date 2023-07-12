import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function saveLog(log) {
  await client.connect();
  const result = await client.db('dbLogs').collection('logs').insertOne(log);
}
