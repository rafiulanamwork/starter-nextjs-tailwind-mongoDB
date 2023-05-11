import { ObjectId } from "mongodb";
import { getDb } from "../utils/dbConnect";

const COLLECTION_NAME = "users";

export async function getUsers(req, res) {
  try {
    const db = getDb();
    const users = await db.collection(COLLECTION_NAME).find().toArray();
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
}

export async function getUserById(req, res) {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res
        .status(404)
        .json({ success: false, error: "User ID is required." });
    }
    const db = getDb();
    const result = await db
      .collection(COLLECTION_NAME)
      .findOne({ _id: new ObjectId(userId) });
    if (!result) {
      return res
        .status(404)
        .json({ success: false, error: `User with ID ${userId} not found.` });
    }
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
}

export async function createUser(req, res) {
  try {
    const db = getDb();
    const result = await db.collection(COLLECTION_NAME).insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
}

export async function updateUser(req, res) {
  try {
    const db = getDb();
    const { userId } = req.query;
    const result = await db
      .collection(COLLECTION_NAME)
      .updateOne({ _id: new ObjectId(userId) }, { $set: req.body });

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
}

export async function deleteUser(req, res) {
  try {
    const db = getDb();
    const result = await db
      .collection(COLLECTION_NAME)
      .deleteOne({ _id: new ObjectId(req.query.userId) });
    res
      .status(200)
      .json({ success: true, message: "Successfully deleted the user" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error });
  }
}
