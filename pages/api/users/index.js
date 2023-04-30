import dbConnect from "../../../database/utils/dbConnect";
import { getUsers, postUser } from "../../../database/controller/controller";

export default async function handler(req, res) {
  dbConnect().catch(() =>
    res.status(405).json({ error: "Error in the Connection" })
  );

  // type of request
  const { method } = req;
  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      postUser(req, res);
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`'Method', ${method} 'Not Allowed'`);
      break;
  }
}
