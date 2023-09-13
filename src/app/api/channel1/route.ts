import { NextResponse } from "next/server";
const channel1 = {
  sections: ["general", "league-of-legends", "afk"],
};
export async function GET() {
  return NextResponse.json(channel1);
}
