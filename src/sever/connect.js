
// import{ MongoClient, ServerApiVersion } from 'mongodb';
// const uri=process.env.MONGO_URI;

// export const collectionNameObj={
//     productCollection:'products'
// }



// export default async function dbConnect(collection){
//     const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// return client.db('quickmart').collection(collection)
// }

import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = process.env.MONGO_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const collectionNameObj={
  productCollection:'products'
}
export default function dbConnect(collection){
    
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });

    return client.db('quickmart').collection(collection)
}