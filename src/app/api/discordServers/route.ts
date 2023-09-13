import { NextResponse } from "next/server";
const discordServers = {
  "league-of-legends": {
    name: "League of Legends Community",
    sections: ["general", "league-of-legends", "osu", "afk"],
  },
  dota: {
    name: "Dota Community",
    sections: ["general", "dota", "anime", "afk"],
  },
  "cs-go": {
    name: "CS:GO Community",
    sections: ["general", "cs:go", "case gacha", "afk"],
  },
};
export async function GET() {
  return NextResponse.json(discordServers);
}
