import { NextResponse } from "next/server";
const discordServers = {
  "league-of-legends": {
    id: "league-of-legends",
    name: "League of Legends",
    sections: {
      general: {
        "2000/11/01": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/02": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/03": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/04": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/05": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/06": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/07": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      "league-of-legends": {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      osu: {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      afk: {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
    },
    defaultImg: "https://cdn.discordapp.com/embed/avatars/0.png",
  },
  dota: {
    id: "dota",
    name: "Dota",
    sections: {
      general: {
        "2000/11/01": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/02": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/03": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/04": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/05": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/06": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/07": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      "league-of-legends": {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      osu: {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      afk: {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
    },
    defaultImg: "https://cdn.discordapp.com/embed/avatars/1.png",
  },
  "cs-go": {
    id: "cs-go",
    name: "CS:GO",
    sections: {
      general: {
        "2000/11/01": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/02": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/03": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/04": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/05": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/06": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/07": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      "league-of-legends": {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      osu: {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
      afk: {
        "2000/11/08": [
          {
            name: "user1",
            avatar: "https://cdn.discordapp.com/embed/avatars/0.png",
            message: "user1message",
            date: "01/11/2000 05:31",
          },
          {
            name: "user2",
            avatar: "https://cdn.discordapp.com/embed/avatars/1.png",
            message: "user2message",
            date: "01/11/2000 05:32",
          },
          {
            name: "user3",
            avatar: "https://cdn.discordapp.com/embed/avatars/2.png",
            message: "user3message",
            date: "01/11/2000 05:33",
          },
          {
            name: "user4",
            avatar: "https://cdn.discordapp.com/embed/avatars/3.png",
            message: "user4message",
            date: "01/11/2000 05:34",
          },
        ],
      },
    },
    defaultImg: "https://cdn.discordapp.com/embed/avatars/2.png",
  },
};
export async function GET() {
  return NextResponse.json(discordServers);
}
