import { MongoClient } from "mongodb";

import { NextResponse } from "next/server";

export async function GET() {
  const client = new MongoClient(process.env.MONGODB_URI!);

  await client.connect();
  const db = client.db();
  const posts = await db.collection("servers").find({}).toArray();

  return NextResponse.json(posts);
}
