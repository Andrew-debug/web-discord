"use server";
import { user } from "./endpoints/user";
import { channel } from "./endpoints/channel";

const endpoints = {
  user: user,
  channel: channel,
};

export const getUser = async (email: string) => {
  return await endpoints.user.findUser(email);
};

export const getChannelData = async (channelId: string) => {
  return await endpoints.channel.findChannel(channelId);
};

export const getUserChannels = async (email: string) => {
  return await endpoints.user.getUserSubscriptions(email);
};
