import { MongoClient, Db } from "mongodb";
const sampleEmail = "chinazes@gmail.com";
const sampleChannel = "padik";

const serverCollection = "servers";
const userCollection = "user";

export class Database {
  //@ts-ignore
  db: Db;
  //@ts-ignore
  user: User;
  //@ts-ignore
  channel;

  async connectToDatabase() {
    try {
      const client = new MongoClient(process.env.MONGODB_URI ?? "");
      await client.connect();
      console.log("connected");
      this.db = client.db();
    } catch (error) {
      console.error(error);
    }
    this.user = new User(this.db, this);
    this.channel = new Channel(this.db);
  }

  async clearCollection(collection: string) {
    await this.db.collection(collection).deleteMany({});
    console.log(`collection ${collection} cleared`);
  }
}

class User {
  db;
  endpoints;
  constructor(db: Db, endpoints: Database) {
    this.db = db;
    this.endpoints = endpoints;
  }
  async createUser(name: string, email: string, image: string) {
    const user = await this.findUser(email);
    if (user) return;

    await this.db
      .collection(userCollection)
      .insertOne({ name, email, image, channelsSubscription: [] });
    console.log(`user ${email} created`);
  }
  async findUser(email: string) {
    const result = await this.db.collection(userCollection).findOne({ email });
    if (!result) console.log(`${email} user not found`);
    return result;
  }

  async subscribeToChannel(email: string, channelname: string) {
    const user = await this.findUser(email);
    if (!user) return;

    const channel = await this.endpoints.channel.findChannel(channelname); // fix

    if (!channel) return;
    await this.db.collection(userCollection).updateOne(
      { _id: user._id },
      {
        $addToSet: {
          channelsSubscription: channel._id,
        },
      }
    );
    console.log("subscribed");
  }

  async getUserSubscriptions(email: string) {
    const user = await this.findUser(email);
    if (!user) return;

    const { channelsSubscription } = user;
    return await this.db
      .collection(serverCollection)
      .find({ _id: { $in: [...channelsSubscription] } })
      .toArray();
  }
}
class Channel {
  db;
  constructor(db: Db) {
    this.db = db;
  }

  async createChannel(channelName: string) {
    await this.db.collection(serverCollection).insertOne({ name: channelName });
    console.log(`${channelName} channel created`);
  }

  async findChannel(channelName: string) {
    const result = await this.db
      .collection(serverCollection)
      .findOne({ name: channelName });
    console.log(`${channelName} channel found`);
    return result;
  }
}

export async function fetchUserChannels(email: string) {
  if (!email) return;
  const db = new Database();
  await db.connectToDatabase();
  return await db.user.getUserSubscriptions(email);
}
