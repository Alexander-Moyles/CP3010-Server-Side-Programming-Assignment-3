import { MongoClient, ServerApiVersion } from 'mongodb';

export async function connectToDB() {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@clustercna.kg5rvem.mongodb.net/?appName=ClusterCNA`;

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    await client.connect();

    return { client, db: client.db("rickmorty") };
}
