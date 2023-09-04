const PicoDB = require('picodb');
const db = PicoDB();

export async function getData() {
  const resp = await db.find({}).toArray();
  console.log(resp)
}

export async function insert() {
  const doc = await db.insertOne({ a: 1 });
  console.log(doc)
}