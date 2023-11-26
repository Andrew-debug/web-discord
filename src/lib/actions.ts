import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!);

const sampleEmail = "chinazes@gmail.com";
const sampleChannel = "padik";

const serverCollection = "servers";
const userCollection = "user";

async function createUser(email: string) {
  await client.connect();
  const db = client.db();

  // validate if user exists
  await db
    .collection(userCollection)
    .insertOne({ email, channelsSubscription: [] });
  console.log(`user ${email} created`);
}

async function findUser(email: string) {
  await client.connect();
  const db = client.db();

  const result = await db.collection(userCollection).findOne({ email });
  console.log(`${email} user found`);
  console.log(result);
  return result;
}

async function subscribeToChannel(email: string, channelname: string) {
  await client.connect();
  const db = client.db();

  const user = await db.collection(userCollection).findOne({ email });
  if (!user) return;

  const channel = await findChannel(channelname);

  if (!channel) return;
  await db.collection(userCollection).updateOne(
    { _id: user._id },
    {
      $addToSet: {
        channelsSubscription: channel._id,
      },
    }
  );
  console.log("subscribed");
}

async function clearCollection(collection: string) {
  await client.connect();
  const db = client.db();

  await db.collection(collection).deleteMany({});
  console.log(`collection ${collection} cleared`);
}

async function createChannel(channelName: string) {
  await client.connect();
  const db = client.db();
  console.log(`${channelName} channel created`);
  await db.collection(serverCollection).insertOne({ name: channelName });
}

async function findChannel(channelName: string) {
  await client.connect();
  const db = client.db();

  const result = await db
    .collection(serverCollection)
    .findOne({ name: channelName });
  console.log(`${channelName} channel found`);
  return result;
}

async function main() {
  await clearCollection(userCollection);
  await clearCollection(serverCollection);

  await createUser(sampleEmail);

  await findUser(sampleEmail);
  await createChannel(sampleChannel);
  await findChannel(sampleChannel);
  await subscribeToChannel(sampleEmail, sampleChannel);
  await subscribeToChannel(sampleEmail, sampleChannel);
  await findUser(sampleEmail);
}
