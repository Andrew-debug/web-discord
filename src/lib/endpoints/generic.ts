import mongoPool from "../mongodb";

export async function endpoint(context: any, func: Function) {
  let db = await mongoPool;
  func.bind(context);
  let res = func(db);
}
