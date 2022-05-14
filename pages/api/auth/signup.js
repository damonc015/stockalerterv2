import { connect } from "../../../store/database";

async function handler(req, res) {
  const data = req.body;
  const { user, password } = data;
  if (!user || !password || password.trim().length < 7) {
    res.status(422).json({ message: "Error password" });
  }
  const client = await conntectToDatabase();
  const db = client.db();

  db.collection("users");
}
