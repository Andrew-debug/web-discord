import { MongoClient, Db } from "mongodb";
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let mongoPool: Promise<Db>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<Db>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect().then((x) => x.db());
  }
  mongoPool = globalWithMongo._mongoClientPromise;
  console.log("mongodb file");
} else {
  // In production mode, it's best to not use a global variable.

  client = new MongoClient(uri, options);
  mongoPool = client.connect().then((x) => x.db());
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default mongoPool;
