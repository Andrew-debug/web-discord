import { endpoints } from "../actions";
import mongoPool from "../mongodb";

const userCollection = "user";
const serverCollection = "servers";

export const user = {
  createUser: async function (name: string, email: string, image: string) {
    let db = await mongoPool;
    const user = await this.findUser(email);
    if (user) return;
    await db.collection(userCollection).insertOne({
      name: String(name),
      email: String(email),
      image: String(image),
      channelsSubscription: [],
    });
    console.log(`user ${email} created`);
  },
  findUser: async function (email: string) {
    if (typeof email !== "string") return;
    let db = await mongoPool;
    const result = await db.collection(userCollection).findOne({ email });
    if (!result) console.log(`${email} user not found`);
    return result;
  },

  subscribeToChannel: async function (email: string, channelId: string) {
    const user = await this.findUser(email);
    if (!user) return;

    let db = await mongoPool;
    const channel = await endpoints.channel.findChannel(channelId); // fix

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
  },

  getUserSubscriptions: async function (email: string) {
    let db = await mongoPool;

    const user = await this.findUser(email);
    if (!user) return;

    const { channelsSubscription } = user;
    console.log("user subs fn");
    return await db
      .collection(serverCollection)
      .find({ _id: { $in: [...channelsSubscription] } })
      .toArray();
  },
};
