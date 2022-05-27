import { MongoClient } from "mongodb";

export async function connect() {
  const client = await MongoClient.connect(
    `mongodb+srv://para0123:${process.env.DB_KEY}@cluster0.zaeya.mongodb.net/auth-cred?retryWrites=true&w=majority`
  );
  return client;
}
