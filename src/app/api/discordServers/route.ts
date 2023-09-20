import { NextResponse } from "next/server";
const discordServers = {
  "league-of-legends": {
    id: "league-of-legends",
    name: "League of Legends Community",
    sections: ["general", "league-of-legends", "osu", "afk"],
    defaultImg: "https://cdn.discordapp.com/embed/avatars/0.png",
  },
  dota: {
    id: "dota",
    name: "Dota Community",
    sections: ["general", "dota", "anime", "afk"],
    defaultImg: "https://cdn.discordapp.com/embed/avatars/1.png",
  },
  "cs-go": {
    id: "cs-go",
    name: "CS:GO Community",
    sections: ["general", "cs:go", "case gacha", "afk"],
    defaultImg: "https://cdn.discordapp.com/embed/avatars/2.png",
  },
};
export async function GET() {
  return NextResponse.json(discordServers);
}
