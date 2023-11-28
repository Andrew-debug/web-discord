export interface IChannel {
  id: string;
  name: string;
  sections: { [key: string]: { [key: string]: IMessageProps[] } };
  defaultImg: string;
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
