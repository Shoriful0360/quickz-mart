import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

let clientPromise;

if (!global._mongoClientPromise) {
  global._mongoClientPromise = client.connect(); // Connect only once
}

clientPromise = global._mongoClientPromise;

export const collectionNameObj = {
  productCollection: "products",
  orderCollection: "Orders",
  userCollection:"users"
};

export default async function dbConnect(collection) {
  const mongoClient = await clientPromise; // Wait for ready connection
  const db = mongoClient.db("quickmart");
  return db.collection(collection);
}
