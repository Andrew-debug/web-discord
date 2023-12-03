import { serverCollection } from "@/utils";
import mongoPool from "../mongodb";
import { ObjectId } from "mongodb";

export const channel = {
  createChannel: async function (channelName: string, image: string) {
    let db = await mongoPool;
    await db.collection(serverCollection).insertOne({
      name: channelName,
      sections: { general: {} },
      image: image || "https://cdn.discordapp.com/embed/avatars/0.png",
    });
    console.log(`${channelName} channel created`);
  },
  findChannel: async function (channelId: string) {
    let db = await mongoPool;
    const result = await db
      .collection(serverCollection)
      .findOne({ _id: new ObjectId(channelId) });
    console.log(`${channelId} channel found`);
    return result;
  },
};
