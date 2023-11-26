// import { MongoClient } from "mongodb";

// import { NextResponse } from "next/server";

// export async function GET() {
//   const client = new MongoClient(process.env.MONGODB_URI!);

//   await client.connect();
//   const db = client.db();
//   const posts = await db.collection("servers").find({}).toArray();

//   return NextResponse.json(posts);
// }

import { NextResponse } from "next/server";
import * as Realm from "realm-web";
export async function GET() {
  const realm_app = process.env.NEXT_PUBLIC_REALM_APP_ID ?? "";
  const app = new Realm.App({ id: realm_app });
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = await app.logIn(credentials);
    const allData = await user.functions.getAllServers();
    return NextResponse.json(allData);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
