import { ObjectId } from "mongodb";
export interface IChannel {
  _id: ObjectId;
  name: string;
  sections: { [key: string]: { [key: string]: IMessageProps[] } };
  image: string;
}
export interface IMessageProps {
  avatar: string;
  name: string;
  date: string;
  message: string;
}
export interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  channelsSubscription: [] | null;
}
