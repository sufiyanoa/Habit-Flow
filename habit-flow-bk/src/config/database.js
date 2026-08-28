import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDb = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected successfully");
  } catch (error) {
    console.log("error in the database");
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDb;
