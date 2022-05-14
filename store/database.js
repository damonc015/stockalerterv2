import { MongoClient } from "mongodb";

export async function connect() {
  const client = await MongoClient.connect(
    
  );

  return client;
}
