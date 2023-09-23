import { NextResponse } from "next/server";

const userData = {
  friendList: [
    { userId: "0", userName: "hashinshin", status: "online" },
    { userId: "1", userName: "cookielol", status: "invisible" },
    { userId: "2", userName: "jaxmain", status: "idle" },
    { userId: "3", userName: "toplaner", status: "dnd" },
    { userId: "4", userName: "drututt", status: "mobile" },
  ],
};

export async function GET() {
  return NextResponse.json(userData);
}
