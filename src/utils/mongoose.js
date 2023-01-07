import { connect } from "mongoose";
import { MONGODB_URI } from "../config";

// connection to db
(async () => {
  try {
    const db = await connect("mongodb+srv://websergio:3099sarl@cluster0.rargluw.mongodb.net/proyectofinalweb?retryWrites=true&w=majority");
    console.log("Db connectect to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
